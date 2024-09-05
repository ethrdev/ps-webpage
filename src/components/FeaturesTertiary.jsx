import {
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const features = [
  {
    name: "Bot playstyles.",
    description:
      'Choose from two human-like logics, a tight or an aggressive gameplan, and watch your skills soar.',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "EV measurement.",
    description:
      "As you make decisions during training, Poker Scientist measures the expected value (EV) of each move and compares it to the highest EV decision.",
    icon: ChartBarIcon,
  },
  {
    name: "Spot selection.",
    description:
      "Take control of your poker training. Choose from a range of cash games, heads-up, or multi-table tournaments to train the spots you want to improve on.",
    icon: AdjustmentsVerticalIcon,
  },
];

export function FeaturesTertiary() {
  const { t } = useTranslation("home");

  return (
    <div className="mx-auto px-4 pt-16 pb-8 lg:max-w-7xl lg:px-8 lg:pt-32 lg:pb-16">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-8">
        <div className="lg:ml-auto lg:pt-0 lg:pl-4">
          <div className="lg:max-w-lg">
            <h2 className="bg-gradient-to-r from-teal-400 via-teal-500 to-sky-600 bg-clip-text text-base font-semibold leading-4 tracking-tight text-transparent lg:text-xl lg:leading-8">
              {t("Practice mode")}
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white lg:text-3xl">
              {t("Train your skills")}
            </p>
            <div className="mt-4 text-sm text-gray-300 lg:mt-6 lg:text-lg">
              {t(
                "Improve your game with the GTO practice mode! Master your strategy and make smart decisions through practice, as you play against our advanced GTO-Bot."
              )}
            </div>
            <dl className="mt-5 max-w-xl space-y-4 text-xs leading-4 text-gray-300 lg:mt-10 lg:max-w-none lg:space-y-8 lg:text-base lg:leading-7">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon
                      className="absolute top-1 left-1 h-4 w-4 text-teal-400 lg:h-5 lg:w-5"
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
        <div className="flex items-start justify-end lg:order-first">
          <Image
            src="/app-screenshots/practice-mode.png"
            alt="Product screenshot"
            className="mt-4 w-[24rem] max-w-none rounded bg-white/5 shadow ring-1 ring-white/10 lg:-ml-0 lg:mt-20 lg:w-[48rem] lg:rounded-md lg:shadow-xl"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
