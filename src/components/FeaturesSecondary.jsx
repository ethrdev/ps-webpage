import {
  CpuChipIcon,
  CalculatorIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const features = [
  {
    name: "Accuracy.",
    description:
      "The Nash-Distance of our gameplans is between 0.01 - 0.15% pot per hand, giving you the most accurate strategies available.",
    icon: CalculatorIcon,
  },
  {
    name: "Hardware.",
    description:
      "With a network of virtual machines powering our solver, we are able to deliver the most accurate gameplan in the world thanks to impressive hardware power.",
    icon: CpuChipIcon,
  },
  {
    name: "Next-gen features.",
    description:
      "Unlock a deeper understanding of the game with our Simplifier and Runout-Clustering feature, giving you the ability to exploit your opponents strategic blunders for maximum gain.",
    icon: RocketLaunchIcon,
  },
];

export function FeaturesSecondary() {
  const { t } = useTranslation("home");

  return (
    <div className="mx-auto px-4 pt-16 pb-8 lg:max-w-7xl lg:px-8 lg:pt-32 lg:pb-16">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-8">
        <div className="lg:pr-8 lg:pt-0">
          <div className="lg:max-w-lg">
            <h2 className="bg-gradient-to-r from-pink-500 via-rose-600 to-red-700 bg-clip-text text-base font-semibold leading-4 tracking-tight text-transparent lg:text-xl lg:leading-8">
              Poker
              <span className="bg-gradient-to-r from-teal-400 via-teal-500  to-teal-600 bg-clip-text text-base font-semibold tracking-tight text-transparent lg:text-xl">
                Scientist
              </span>
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white lg:text-3xl">
              {t("Perfect GTO solutions")}
            </p>
            <div className="mt-4 text-sm text-gray-300 lg:mt-6 lg:text-lg">
              {t("Our browser-based software gives you instant access to our GTO gameplan, containing billions of strategies.")}"
            </div>
            <dl className="mt-5 max-w-xl space-y-4 text-xs leading-4 text-gray-300 lg:mt-10 lg:max-w-none lg:space-y-8 lg:text-base lg:leading-7">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon
                      className="absolute top-1 left-1 h-4 w-4 text-pink-600 lg:h-5 lg:w-5"
                      aria-hidden="true"
                    />
                    {t(feature.name)}
                  </dt>{" "}
                  <dd className="inline">{t(feature.description)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Image
          src="/app-screenshots/runout-distribution.png"
          alt="Product screenshot"
          className="mt-4 w-[24rem] max-w-none rounded shadow ring-1 ring-white/10 lg:-ml-0 lg:mt-20 lg:w-[48rem] lg:rounded-md lg:shadow-xl"
          width={2432}
          height={1442}
        />
      </div>
    </div>
  );
}
