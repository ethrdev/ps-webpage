import Image from "next/image";
import { useTranslation } from "react-i18next";

export function CTA() {
  const { t } = useTranslation("home");

  return (
    <div className="mx-auto px-4 pt-12 pb-16 lg:max-w-7xl lg:px-8 lg:pt-32 lg:pb-32">
      <div className="flex flex-row justify-center pb-4 lg:pb-16">
        <div>
          <div className="w-18 h-18 group relative lg:h-36 lg:w-36">
            <div className="absolute -inset-[3px] m-[10%] rotate-12 animate-pulse-slow  rounded-lg bg-gradient-to-r from-pink-700 to-teal-500 blur-lg lg:rounded-2xl lg:blur-2xl"></div>
            <div className="absolute -inset-[3px] m-[10%] rotate-6 animate-pulse-slow rounded-lg bg-gradient-to-br from-pink-700 to-teal-500 blur-sm lg:rounded-2xl lg:blur-lg"></div>
            <div className="blur-xs absolute -inset-[3px] m-[5%] animate-pulse-slow rounded-lg bg-gradient-to-tr from-amber-400 to-teal-500 opacity-75 lg:rounded-2xl lg:blur"></div>
            <div className="shadow-xs absolute -inset-[3px] animate-pulse-slow rounded-lg bg-gradient-to-r from-pink-700 to-teal-500 shadow-amber-300/50 saturate-150 lg:rounded-2xl lg:shadow-sm"></div>
            <div className="absolute left-[20%] top-[10%] bottom-[10%] right-[20%] animate-pulse-slow rounded-lg bg-gradient-to-r from-pink-700 to-teal-500 saturate-150 lg:rounded-2xl"></div>
            <Image
              className="w-18 h-18 shadow-xs relative flex items-center rounded-[7px] shadow-amber-300/50 lg:h-36 lg:w-36 lg:rounded-[13px] lg:shadow-sm "
              width={96}
              height={96}
              alt="poker scientist logo"
              src="/ps-logo-exclusion.svg"
            ></Image>
          </div>
        </div>
      </div>
      <div className="mx-auto pt-2 text-center lg:mx-0 lg:flex-auto lg:pt-4 lg:text-center">
        <h2 className="mx-auto bg-gradient-to-r from-teal-400 via-teal-500 to-sky-600 bg-clip-text text-2xl font-semibold tracking-tight text-transparent lg:text-6xl">
          {t("Unleash")}
          <span className="text-white"> {t("your full poker potential.")}</span>
        </h2>
        <div className="mt-8 flex items-center justify-center gap-x-6 lg:mt-16">
          <a
            href=""
            className="shadow-xs cursor-pointer rounded bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 px-2.5 py-1.5 text-xs font-semibold text-white duration-300  hover:bg-gradient-to-r hover:from-pink-600 hover:via-pink-700 hover:to-pink-800  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 lg:px-3.5 lg:text-base lg:shadow-sm "
          >
            {t("Get started")}
          </a>
          <a
            href="https://ps-docs.vercel.app/"
            className="text-xs font-semibold text-white lg:text-base"
          >
            {t("Learn more")} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
