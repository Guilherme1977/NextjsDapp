import Head from 'next/head'
import Content from '../components/Content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs-Dapp-Template | WebXDAO</title>
        <meta
          name="description"
          content="Next.js Hackaton Dapp starter | WebXDAO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto flex h-full flex-col">
        <Content></Content>
      </div>
    </>
  )
}
