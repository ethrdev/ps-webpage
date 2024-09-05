import { type AppType } from "next/dist/shared/lib/utils";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "../components/Header";



const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Analytics />
    </>
  );

};

export default appWithTranslation(MyApp)


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
