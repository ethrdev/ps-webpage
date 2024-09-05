import Image from "next/image";


export function LogoFeaturesPage() {

    return (

        <div className="flex flex-row justify-center pt-56 pb-16 max-w-7xl">
            <div>
                <div className="relative w-36 h-36 group">
                    <div className="absolute -inset-[3px] m-[10%] bg-gradient-to-r from-pink-700  to-teal-500 rounded-2xl rotate-12 blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -inset-[3px] m-[10%] bg-gradient-to-br from-pink-700 to-teal-500 rounded-2xl rotate-6 blur-lg animate-pulse-slow"></div>
                    <div className="absolute -inset-[3px] m-[5%] bg-gradient-to-tr from-amber-400 to-teal-500 rounded-2xl opacity-75 blur animate-pulse-slow"></div>
                    <div className="absolute shadow-sm -inset-[3px] bg-gradient-to-r from-pink-700 to-teal-500 rounded-2xl animate-pulse-slow saturate-150 shadow-amber-300/50"></div>
                    <div className="absolute left-[20%] top-[10%] bottom-[10%] right-[20%] bg-gradient-to-r from-pink-700 to-teal-500 rounded-2xl saturate-150 animate-pulse-slow"></div>
                    <Image
                        className="relative flex items-center w-36 h-36 rounded-[13px] shadow-sm shadow-amber-300/50 "
                        width={144}
                        height={144}
                        alt="poker scientist logo"
                        src="/ps-logo-exclusion.svg"
                    ></Image>
                </div>
            </div>
        </div>
    )
}