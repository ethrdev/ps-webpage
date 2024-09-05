import Head from "next/head";
import { HeroPatternChangelog } from "../components/changelog/HeroPatternChangelog";
import LayoutChangelog from "../components/changelog/LayoutChangelog";
import { FooterWithNewsletter } from "../components/FooterWithNewsletter";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Changelog() {

    return (
        <>
            <Head>
                <title>Changelog</title>
                <meta name="description" content="Poker Scientist Changelog" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/ps-favicon.png" />
            </Head>
            <div className="pt-4 md:pt-16 pb-8 mx-auto max-w-7xl lg:pl-8">
                <HeroPatternChangelog />
                <LayoutChangelog />
                <FooterWithNewsletter />
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
