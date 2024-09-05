import { Head, Html, Main, NextScript } from 'next/document'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <meta name="ahrefs-site-verification" content="8fa383bf58a9fd714c9643fbfbd3c633a5c9fe9fdef0c1699b2f425083d155a2"></meta>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </Head>
      <body className="relative justify-center items-center max-w-screen overflow-x-hidden w-screen antialiased bg-[#080808]">
        <Main />
        {/*<script id="CookieDeclaration" src="https://consent.cookiebot.com/0fa890c2-7c90-49f3-843d-d7226caed73c/cd.js" type="text/javascript" async></script>*/}
        <NextScript />
      </body>
    </Html>
  )
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
