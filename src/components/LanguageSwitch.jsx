import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  {
    id: 1,
    value: "en",
    name: "English",
    avatar: "/flags/united-states.svg",
  },
  {
    id: 2,
    value: "de",
    name: "Deutsch",
    avatar: "/flags/germany.svg",
  },
  {
    id: 3,
    value: "ko",
    name: "한국어",
    avatar: "/flags/south-korea.svg",
  },
  {
    id: 4,
    value: "pt",
    name: "Português",
    avatar: "/flags/brazil.svg",
  },
  {
    id: 5,
    value: "fr",
    name: "Français",
    avatar:"/flags/france.svg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LanguageSwitcher() {
  const [selected, setSelected] = useState(people[0]);
  const { t, i18n } = useTranslation();
  const router = typeof window !== "undefined" ? useRouter() : undefined;

  const handleLanguageChange = (selectedValue) => {
    const selectedPerson = people.find((person) => person.value === selectedValue.value);
    if (selectedPerson) {
      setSelected(selectedPerson);
      const selectedLanguage = selectedValue ? selectedValue.value : "en";
      i18n.changeLanguage(selectedLanguage).then(() => {
        router.push(router.pathname, router.asPath, { locale: selectedLanguage });
      });
    }
  };
  
  
  return (
    <div>
      <Listbox onChange={handleLanguageChange} value={selected}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-3 text-left text-neutral-400 shadow-sm  ring-inset focus:outline-none sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img
                    src={selected.avatar}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="block w-0 truncate">{selected.name}</span>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-2 max-h-56 w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 bg-opacity-20 py-1 text-base ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "scale-110 text-white duration-300"
                            : "text-gray-900",
                          "relative cursor-default select-none py-1 pl-3 pr-3"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={person.avatar}
                              alt=""
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block w-0 truncate"
                              )}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default LanguageSwitcher;
