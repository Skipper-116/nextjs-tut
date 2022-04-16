import Link from "next/link";
import Head from "next/head";
import ProfilePicture from "../../components/profilePicture";
import Script from "next/script";
import Layout from "../../components/layout";

function FirstPost() {
    return(
        <Layout>
            <Head>
                <title>Firt Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log('script loaded correctly, window.FB has been populated');
                    console.log(window.Fb)
                }}
            />
            <h1>This is the first post</h1>
            <h2>
                <Link href={"/"}>
                    <a>Back to home</a>
                </Link>
            </h2>
            <ProfilePicture src="/images/profile.jpg" alt='profile picture'/>
        </Layout>
    )
}

export default FirstPost;