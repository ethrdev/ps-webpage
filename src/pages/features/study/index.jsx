import { HeroPatternFeatures } from "../../../components/features/HeroPatternFeatures";
import LayoutStudy from "../../../components/features/LayoutStudy";
import { FooterWithNewsletter } from "../../../components/FooterWithNewsletter";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Study() {

    return (
        <>
            <Head>
                <title>Features of Gameplan Mode</title>
                <meta name="description" content="Poker Scientist features of gameplan mode" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/ps-favicon.png" />
            </Head>
            <div className="pt-4 md:pt-16 pb-8 mx-auto max-w-7xl lg:pl-8">
                <HeroPatternFeatures />
                <div>
                    <LayoutStudy></LayoutStudy>
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
  