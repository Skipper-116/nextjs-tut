import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(filename => {
        const id = filename.replace(/\.md$/,'');
        const fullPath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContent);

        return{
            id,
            ...matterResult.data
        }
    });

    return allPostsData.sort(({date: a}, {date: b}) => {
        if(a < b){
            return 1
        } else if(a > b){
            return -1
        }else {
            return 0
        }
    })
}

function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return{
            params: {
                id: fileName.replace(/\.md$/,'')
            }
        }
    })
}

async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

export {getSortedPostsData, getAllPostIds, getPostData};