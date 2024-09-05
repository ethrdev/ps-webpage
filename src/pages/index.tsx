import { type NextPage } from "next";
import Head from "next/head";
import { HeroPattern } from "../components/HeroPattern";
import { HeroWithScreenshot } from "../components/HeroWithScreenshot";
import { LogosSimple } from "../components/LogosSimple";
import { FeaturesSecondary } from "../components/FeaturesSecondary";
import { FeaturesTertiary } from "../components/FeaturesTertiary";
import { Features } from "../components/Features";
import { CTA } from "../components/CTA";
import { Promoter } from "../components/Promoter";
import { FooterWithNewsletter } from "../components/FooterWithNewsletter";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import NewsletterForm from "../components/newsletter-form/NewsletterForm";




const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Poker Scientist</title>
        <meta name="description" content="Poker Scientist Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ps-favicon.png" />
      </Head>
      <div className="px-4">
        <HeroPattern />
        <HeroWithScreenshot />
        <LogosSimple />
        <FeaturesSecondary />
        <FeaturesTertiary />
        <Features />
        <NewsletterForm />
        <Promoter />
        <CTA />
        <FooterWithNewsletter />
      </div>
    </>
  );
};

export default Home;

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
