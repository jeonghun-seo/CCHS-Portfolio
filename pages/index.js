import Head from "next/head";
import Layout from "@/components/layout"
import Section1 from "@/components/contents/main/section1";
import Section2 from "@/components/contents/main/section2";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>충주상업고등학교 미래유망분야 고졸취업인재 양성사업</title>
          <meta name="description" content="충주상업고등학교 미래유망분야 고졸취업인재 양성사업" />
          <meta name="robots" content="index, follow" />
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section1></Section1>
        <Section2></Section2>
      </Layout>
    </>
  )
}
