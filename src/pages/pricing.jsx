import { FooterWithNewsletter } from "../components/FooterWithNewsletter";
import { HeroPatternPricing } from "../components/pricing/HeroPatternPricing";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Shutdown } from "../components/pricing/Shutdown";

export default function Plans() {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Poker Scientist Plans" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ps-favicon.png" />
      </Head>
      <HeroPatternPricing />
      {/* <Pricing 7> */}
      <Shutdown />
      {/* <FooterWithNewsletter /> */}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "changelog",
        "features",
        "home",
        "pricing",
      ])),
      // Will be passed to the page component as props
    },
  };
}
