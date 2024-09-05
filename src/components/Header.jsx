import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitch";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const navigation = [
  { name: "Features", href: "/features/study" },
  { name: "Pricing", href: "/pricing" },
  { name: "Documentation", href: "https://portfolio-docs-teal.vercel.app/" },
  { name: "Changelog", href: "/changelog" },
];

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("home");

  return (
    <div className="sticky top-0 z-50 flex h-12 w-screen justify-center bg-transparent px-0 md:px-6">
      <nav
        className="flex w-full max-w-7xl items-center justify-between border-b-[1px] border-neutral-500 border-opacity-50 py-2 px-6 backdrop-blur-md md:px-0 lg:px-0"
        aria-label="Global"
      >
        <Link href="/" className="hidden p-1 md:inline-block">
          <span className="sr-only">Poker Scientist</span>
          <Image
            className="h-6 lg:hidden"
            height={24}
            width={24}
            src="/brand.png"
            alt=""
          />
          <Image
            className="hidden h-6 lg:flex"
            height={24}
            width={96}
            src="/brand-text.png"
            alt=""
          />
        </Link>

        <div className="flex gap-2 lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              locale={locale}
              className="mx-1 text-xs font-semibold leading-6 text-neutral-300 duration-200 hover:text-white md:text-sm"
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
        <LanguageSwitcher></LanguageSwitcher>
        <div className="hidden items-center gap-6 md:flex">
          {/* <Link
            href="https://app.poker-scientist.com"
            className="text-xs font-semibold leading-6 text-neutral-300 hover:text-white md:text-sm"
          >
            {t("Log in")}
          </Link>
                   <Link
            href="https://app.poker-scientist.com"
            className="cursor-pointer rounded bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 px-2 py-1 text-xs font-semibold leading-6 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 md:px-3 md:text-sm"
          >
            {t("Sign up")}
          </Link>
          */}
        </div>
      </nav>
    </div>
  );
}
