import LayoutPractice from "../../../components/features/LayoutPractice";
import { HeroPatternPractice } from "../../../components/features/HeroPatternPractice";
import { FooterWithNewsletter } from "../../../components/FooterWithNewsletter";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Practice() {

    return (
        <>
            <Head>
                <title>Features of Practice Mode</title>
                <meta name="description" content="Poker Scientist features of practice mode" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/ps-favicon.png" />
            </Head>
            <div className="pt-4 md:pt-16 pb-8 mx-auto max-w-7xl lg:pl-8">
                <HeroPatternPractice />
                <div>
                    <LayoutPractice></LayoutPractice>
                </div>
                <div className="mt-24">
                    <FooterWithNewsletter></FooterWithNewsletter>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'changelog',
          'features',
          'home',
          'pricing',
        ])),
        // Will be passed to the page component as props
      },
    }
  }
  