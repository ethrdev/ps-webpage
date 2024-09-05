/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

const frequencies = [
  {
    value: "monthly",
    label: "Monthly",
    priceSuffix: "/month",
    defaultChecked: true,
  },
  { value: "quarterly", label: "Quarterly", priceSuffix: "/3months" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Gameplan",
    id: "tier-gameplan",
    href: "",
    price: { monthly: "€49", quarterly: "€129", annually: "€440" },
    description: "Enhance your study with the most accurat GTO solutions.",
    features: [
      "Cash-Game Gameplan",
      "MTT Gameplan",
      "Heads-Up spots",
      "Instant GTO solutions",
    ],
    mostPopular: false,
  },
  {
    name: "Bundle",
    id: "tier-bundle",
    href: "",
    price: { monthly: "€75", quarterly: "€199", annually: "€675" },
    description:
      "Enjoy both the Gameplan and Practice Plans in one convenient package.",
    features: [
      "Cash-Game Gameplan",
      "MTT Gameplan",
      "Practice Mode",
      "All features available",
    ],
    mostPopular: true,
  },
  {
    name: "Practice",
    id: "tier-practice",
    href: "",
    price: { monthly: "€35", quarterly: "€95", annually: "€315" },
    description: "Train and perfect your skills against our expert GTO bot.",
    features: ["Practice Mode", "Heads-Up spots", "Result tracking"],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const { t } = useTranslation("pricing");

  return (
    <div className=" mx-auto max-w-7xl px-6 pt-16 md:pt-36 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {t("Pricing")}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-6 text-gray-300 md:text-lg md:leading-8">
        {t(
          "Whether you're a beginner or an experienced player, our pricing plans are designed to fit your needs and help you improve your game."
        )}
      </p>
      <div className="mt-8 flex justify-center">
        {/*}
                <RadioGroup
                    
                    value={frequency}
                    onChange={setFrequency}
                    className="grid grid-cols-3 p-1 text-xs font-semibold leading-5 text-center text-white rounded-md gap-x-1 bg-white/5"
                >
                    <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                    {frequencies.map((option) => (
                        <RadioGroup.Option
                            key={option.value}
                            
                            value={option}
                            className={({ checked }) =>
                                classNames(checked ? 'bg-teal-500' : '', 'cursor-pointer rounded py-1 px-2.5')
                            }
                        >
                            <span>{option.label}</span>
                        </RadioGroup.Option>
                    ))}
                </RadioGroup>
                */}
      </div>

      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.mostPopular
                ? "bg-white/5 ring-2 ring-teal-500"
                : "ring-1 ring-white/10 ",
              "rounded-2xl p-8 xl:p-10"
            )}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id={tier.id}
                className="text-lg font-semibold leading-8 text-white"
              >
                {t(tier.name)}
              </h3>
              {tier.mostPopular ? (
                <p className="rounded-full bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-600 bg-clip-text py-1 px-2.5 text-xs font-semibold leading-5 text-transparent ">
                  {t("Most popular")}
                </p>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              {t(tier.description)}
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                {tier.price[frequency.value]}
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-300">
                {frequency.priceSuffix}
              </span>
            </p>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-teal-500 text-white shadow-sm hover:bg-teal-400 hover:text-white focus-visible:outline-teal-500"
                  : "bg-white/10 text-white hover:bg-white/20 hover:text-white hover:no-underline focus-visible:outline-white",
                "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              )}
            >
              {t("Buy plan")}
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-white"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
