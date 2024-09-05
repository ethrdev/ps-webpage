import Image from "next/image";
import { useTranslation } from 'react-i18next'


export function CTAFeatures() {
    const { t } = useTranslation('features');

    return (

        <div className="flex flex-row px-6 mx-auto pt-16 max-w-7xl lg:px-8">
            <div className="flex pb-16 flex-row justify-center">
                <div>
                    <div className="relative w-24 h-24 group">
                        <div className="absolute -inset-[2px] m-[10%] bg-gradient-to-r from-pink-700  to-teal-500 rounded-xl rotate-12 blur-2xl animate-pulse-slow"></div>
                        <div className="absolute -inset-[2px] m-[10%] bg-gradient-to-br from-pink-700 to-teal-500 rounded-xl rotate-6 blur-lg animate-pulse-slow"></div>
                        <div className="absolute -inset-[2px] m-[5%] bg-gradient-to-tr from-amber-400 to-teal-500 rounded-xl opacity-75 blur animate-pulse-slow"></div>
                        <div className="absolute shadow-sm -inset-[2px] bg-gradient-to-r from-pink-700 to-teal-500 rounded-xl animate-pulse-slow saturate-150 shadow-amber-300/50"></div>
                        <div className="absolute left-[20%] top-[10%] bottom-[10%] right-[20%] bg-gradient-to-r from-pink-700 to-teal-500 rounded-xl saturate-150 animate-pulse-slow"></div>
                        <Image
                            className="relative flex items-center w-24 h-24 rounded-xl shadow-sm shadow-amber-300/50 "
                            width={64}
                            height={64}
                            alt="poker scientist logo"
                            src="/ps-logo-exclusion.svg"
                        ></Image>
                    </div>
                </div>
            </div>
            <div className="pt-4 mx-auto text-center lg:mx-0 lg:flex-auto lg:text-center">
                <h2 className="mx-auto text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-sky-600">
                    {t("Unleash")} 
                    <span className="text-white"> {t("your full poker potential.")}</span>
                </h2>
                <div className="flex items-center justify-center mt-4 gap-x-2">
                    <a
                        href=""
                        className="duration-300 rounded px-3.5 py-1.5 leading-7 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-r hover:from-pink-600 hover:via-pink-700 hover:to-pink-800  cursor-pointer text-base font-semibold  text-white hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 "
                    >
                        {t("Get started")}
                    </a>
                    <a href="https://ps-docs.vercel.app/" className="text-base font-semibold leading-7 text-white">
                        {t("Learn more")} <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}