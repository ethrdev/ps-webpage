import { useTranslation } from 'react-i18next'



export function HeroFeatures() {
    const { t } = useTranslation('features');

    return (
        <div className="px-6 pt-16 pb-16 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-sm md:text-lg font-semibold leading-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-600 to-rose-700">{t("FEATURES")}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("The standard for GTO poker mastery")}</p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                {t("With its most accurate GTO solutions, next-gen tools and meticulous design, Poker Scientist unlocks your full potential. It is the tool of choice for learning poker.")}
                </p>
            </div>
        </div>
    )
}