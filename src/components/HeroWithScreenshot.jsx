import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function HeroWithScreenshot() {
  const { t } = useTranslation("home");

  return (
    <div className="mx-auto px-4 pt-24 pb-0 lg:max-w-7xl lg:px-8 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-2xl text-center ">
        <div className="bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-[5rem] ">
          {t("Master the Science of Poker")}
        </div>
        <p className="mt-6 text-base leading-6 text-gray-300 lg:text-xl lg:leading-8">
        {t("Become a Poker Scientist and improve your game with our top-quality gameplan and training tools.")}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href=""
            className="shadow-xs cursor-pointer rounded-sm bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 px-2.5 py-1.5 text-xs font-semibold text-white duration-300 hover:bg-gradient-to-r hover:from-teal-400 hover:via-teal-500 hover:to-teal-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 lg:rounded lg:px-3.5 lg:text-base lg:shadow-sm "
          >
            {t("Get started")}
          </Link>
          {/* This should redirect to the documentation page */}
          <Link
            href="https://ps-docs.vercel.app/"
            className="cursor-pointer text-xs font-semibold text-neutral-300 duration-300 hover:text-white lg:text-base"
          >
            {t("Learn more")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="relative overflow-hidden pt-4 lg:pt-12">
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <Image
            src="/app-screenshots/range-versus-range-3.png"
            alt="App screenshot"
            className="mb-[-9%] rounded shadow ring-1 ring-white/10 lg:rounded-lg lg:shadow-2xl"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-10 bottom-0 bg-gradient-to-t from-[#080808] pt-[9%] lg:-inset-x-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
