import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps(context){
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Roy Chanunkha</b>. I'm a software engineer and somewhat anime fan. You can contact me on
          <a href='https://twitter.com/skipper_116' target={"_blank"}>Twitter</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(post => (
              <li className={utilStyles.listItem} key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
                <br/>
                <small className={utilStyles.lightText}>
                  <Date dateString={post.date}/>
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}
