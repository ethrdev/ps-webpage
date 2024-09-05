import { AcademicCapIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const features = [
  {
    name: "Range versus Range.",
    description:
      "This one-of-a-kind feature allows you to see all the information you need about your current game situation in one single sheet.",
    icon: AcademicCapIcon,
  },
  {
    name: "Simplifier.",
    description:
      "Choose from several options for simplifying your GTO-Gameplan with the Simplifier.",
    icon: AcademicCapIcon,
  },
  {
    name: "Runout clustering.",
    description:
      "The runout clustering simplifies the strategy by reducing the number of different strategies you have in your gameplan.",
    icon: AcademicCapIcon,
  },
  {
    name: "Made-Hand-Distribution.",
    description:
      "The made hand distribution classifies hands into 18 different hand groups by their properties.",
    icon: AcademicCapIcon,
  },
  {
    name: "Runout-Distribution graph.",
    description:
      "See exactly how well the runout is hitting your range or your opponents range, measured by expected value (EV).",
    icon: AcademicCapIcon,
  },
  {
    name: "Range normalization.",
    description:
      "Customize the weight for each hand combination to perform at your best.. ",
    icon: AcademicCapIcon,
  },
];

export function Features() {
  const { t } = useTranslation("home");

  return (
    <div className="mx-auto px-4 pt-16 pb-8 lg:max-w-7xl lg:px-8 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 bg-clip-text text-base font-semibold leading-4 tracking-tight text-transparent lg:text-xl lg:leading-8">
          {t("Gameplan mode")}
        </h2>
        <p className="mt-2 text-2xl font-bold tracking-tight text-white lg:text-5xl">
          {t("Fine-tune your strategy")}
        </p>
        <div className="mt-4 text-sm text-gray-300 lg:mt-6 lg:text-lg lg:leading-8">
          {t("Access the optimal solution for your poker play with a Gameplan based on GTO (Game Theory Optimal) principles.")}
        </div>
      </div>

      <div className="relative overflow-hidden pt-4 lg:pt-12">
        <div className="mx-auto max-w-7xl px-0 lg:px-8">
          <Image
            src="/app-screenshots/range-versus-range.png"
            alt="App screenshot"
            className="mb-[-3%] rounded shadow ring-1 ring-white/10 lg:rounded-lg lg:shadow-2xl"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-10 bottom-0 bg-gradient-to-t from-[#080808] pt-[7%] lg:-inset-x-20" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-0 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 text-xs leading-4 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 lg:text-base lg:leading-7">
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
  );
}
