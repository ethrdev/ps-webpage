import { FeaturesGameplan } from "./FeaturesGameplan";
import { useTranslation } from 'react-i18next'

export function GameplanFeatures() {
    const { t } = useTranslation('features');

    return (
        <div className="px-6 pt-12 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto sm:text-left">
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Gameplan</p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    {t("With its most accurate GTO solutions, next-gen tools and meticulous design, Poker Scientist unlocks your full potential. It is the tool of choice for learning poker.")}
                </p>
            </div>
            <FeaturesGameplan></FeaturesGameplan>
        </div>
    )
}