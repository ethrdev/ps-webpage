/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Shutdown() {
  const { t } = useTranslation("pricing");

  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-36 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {t("Service Closure Notice")}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-6 text-gray-300 md:text-lg md:leading-8">
        "We regret to inform you that Poker Scientist will be shutting down its
        services effective August 31, 2024.
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-6 text-gray-300 md:text-lg md:leading-8">
        This decision comes after careful consideration and in light of new
        directions our team is pursuing. We want to extend our heartfelt thanks
        to all our users for your support and dedication throughout our
        journey."
      </p>
    </div>
  );
}
