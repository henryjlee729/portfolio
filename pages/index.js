import HomePage from '../components/Home'
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <link rel='icon' href='./lofitea-portfolio/LofiTea.ico' />
                <meta name="google-site-verification" content="VJs2G3ynvYQ1KG06ciOhdPdklC1gIUEkJ2KcplrnfWU" />
                <meta name="description" content="Henry Lee's portfolio." />
                <title>Home</title>
            </Head>
            <HomePage />
        </div>
    )
}
