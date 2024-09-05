import { HeroPatternFeatures } from "../../components/features/HeroPatternFeatures";
import { LogoFeaturesPage } from "../../components/features/LogoFeaturesPage";
import { HeroFeatures } from "../../components/features/HeroFeatures";
import { FeaturesGameplan } from "../../components/features/FeaturesGameplan";
import { FeaturesTraining } from "../../components/features/FeaturesTraining";
import { FooterWithNewsletter } from "../../components/FooterWithNewsletter";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Features() {

    return (
        <>
            <Head>
                <title>Features of Poker Scientist</title>
                <meta name="description" content="Poker Scientist features overview" />
                <link rel="icon" href="/ps-favicon.png" />
            </Head>
            <HeroPatternFeatures />
            <LogoFeaturesPage />
            <HeroFeatures />
            <FeaturesGameplan />
            <FeaturesTraining />
            {/*<FeaturesSecurity />*/}
            <FooterWithNewsletter />
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
  