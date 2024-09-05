import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from 'react-i18next'


const navigation = [
    {
        name: 'study',
        label: 'Study',
        current: false,
        href: '/features/study',
        children: [
            { name: 'range', label: 'Range vs. Range', href: '/features/study/#range' },
            { name: 'normalization', label: 'Range normalization', href: '/features/study/#normalization' },
            { name: 'simplifier', label: 'Simplifier', href: '/features/study/#simplifier' },
            { name: 'clustering', label: 'Runout clustering', href: '/features/study/#clustering' },
            { name: 'mhd', label: 'Made-hand distribution', href: '/features/study/#mhd' },
            { name: 'runout', label: 'Runout distribution graph', href: '/features/study/#runout' },
            { name: 'macro', label: 'Macro analysis', href: '/features/study/#macro' },
        ],
    },
    {
        name: 'practice',
        label: 'Practice',
        current: true,
        href: '/features/practice',
        children: [
            { name: 'playstyles', label: 'Bot playstyles', href: '#playstyles' },
            { name: 'ev', label: 'EV measurement', href: '#ev' },
            { name: 'spots', label: 'Spot selection sheet', href: '#spots' },
            { name: 'switch', label: 'Switch mode', href: '#switch' },
            { name: 'results', label: 'Result tracking', href: '#results' },
        ],

    },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function LayoutPractice() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { t } = useTranslation('features');

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-zinc-900 bg-opacity-100" />
                        </Transition.Child>

                        <div className="fixed inset-0 top-20 justify-center z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-200 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-200 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-transparent">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-200"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">{t("Close sidebar")}</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">

                                        <nav className="flex-1 space-y-1 bg-transparent px-2" aria-label="Sidebar">
                                            {navigation.map((item) =>
                                                !item.children ? (
                                                    <Link key={item.name}
                                                        href={item.href}
                                                        onClick={() => setSidebarOpen(false)}
                                                        className={classNames(
                                                            item.current
                                                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700 hover:from-pink-600 hover:via-rose-700 hover:to-red-800'
                                                                : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700 hover:from-pink-600 hover:via-rose-700 hover:to-red-800',
                                                            'cursor-pointer group w-full flex items-center pl-2 pr-1 py-0.5 text-left text-base font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-300 duration-200'
                                                        )}
                                                    >
                                                        {t(item.label)}

                                                    </Link>
                                                ) : (
                                                    <div key={item.name} className="space-y-2">

                                                        <>
                                                            <div
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600'
                                                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700',
                                                                    'cursor-pointer group w-full flex items-center pl-2 pr-1 py-0.5 text-left text-base font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-300 duration-200'
                                                                )}
                                                            >
                                                                <span className="flex-1">{t(item.label)}</span>
                                                            </div>
                                                            <div className="space-y-1">
                                                                {item.children.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        onClick={() => setSidebarOpen(false)}
                                                                        className="group flex w-full items-center rounded-md py-0.5 md:py-2 pl-4 pr-2 text-sm font-medium text-neutral-400 cursor-pointer  hover:bg-transparent hover:text-white duration-200"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                        {t(subItem.label)}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </>

                                                    </div>
                                                )
                                            )}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-[64px] md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex min-h-0 flex-1 flex-col border-r border-transparent bg-transparent">
                        <div className="flex flex-1 flex-col overflow-y-auto pt-16 pb-4">

                            <nav className="flex-1 space-y-4 bg-transparent px-2" aria-label="Sidebar">
                                {navigation.map((item) =>
                                    !item.children ? (
                                        <Link key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700 hover:from-pink-600 hover:via-rose-700 hover:to-red-800'
                                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700 hover:from-pink-600 hover:via-rose-700 hover:to-red-800',
                                                'group cursor-pointer  w-full flex items-center pl-2 py-2 text-base font-semibold rounded-md duration-200'
                                            )}
                                        >

                                            {t(item.label)}

                                        </Link>
                                    ) : (
                                        <div key={item.name} className="space-y-1">

                                            <div
                                                className={classNames(
                                                    item.current
                                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600'
                                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700',
                                                    'cursor-pointer  group w-full flex items-center pl-2 pr-1 py-2 text-left text-base font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-300 duration-200'
                                                )}
                                            >

                                                <span className="flex-1">{t(item.label)}</span>

                                            </div>
                                            <div className="space-y-1">
                                                {item.children.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="group cursor-pointer  flex w-full items-center rounded-md py-2 pl-4 pr-2 text-sm font-medium text-neutral-400 hover:bg-transparent hover:text-white duration-200"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="pr-1 icon icon-tabler icon-tabler-point-filled" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path>
                                                        </svg>
                                                        {t(subItem.label)}
                                                    </Link>
                                                ))}
                                            </div>

                                        </div>
                                    )
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col px-4 md:pl-64">
                    <div className="sticky top-20 z-10 bg-transparent rounded pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center bg-neutral-700 border border-neutral-600 rounded-md text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-300"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">{t("Open sidebar")}</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1">
                        <div>
                            <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:px-20">
                                <h2 className="text-xl font-semibold leading-8 tracking-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">{t("Practice")}</h2>
                                <h1 className="text-4xl mt-4 font-semibold text-white">{t("Play against our GTO-Bot")}</h1>
                                <div className="text-sm pt-8 md:text-base leading-7 pb-4 text-gray-300">
                                    {t("Maximize your performance with our GTO-Bot practice mode! Hone your strategy and make informed decisions with our gamification-mode, where you can play against our expert GTO-Bot.")}
                                </div>

                                <div className="border-b border-neutral-600" id="playstyles"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16'>

                                    <div className="col text-white text-2xl mb-8 md:mb-12 font-bold w-[200px]">{t("Bot playstyles")}</div>
                                    <div className="col">
                                        <div className="bg-gradient-to-r w-full p-0.5  mb-12 from-yellow-500  to-cyan-500 rounded-md">
                                            <Image src="/app-screenshots/practice-mode.png"
                                                className="rounded-md"
                                                alt="Practice mode screenshot"
                                                width={1917}
                                                height={920}
                                            ></Image>
                                        </div>
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Exploitative Bot mode.")}</div>
                                        <div className="text-sm md:text-base  pt-8  leading-7 pb-12 text-neutral-300">
                                            {t("Choose from two human-like logics, a tight or an aggressive gameplan, and watch your skills soar. Simply select your preferred play-style via the button on the training screen and watch the Bot adapt.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-[293px] p-0.5  mb-12 from-yellow-500  to-cyan-500 rounded-md">
                                            <Image src="/app-screenshots/bot-styles.png"
                                                className="rounded-md"
                                                alt="Hand details screenshot"
                                                width={291}
                                                height={65}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Tight playstyle")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                            {t("With the tight Gameplan, the Bot will play passively, only opting for more aggressive actions if the expected value (EV) remains high.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Aggressive playstyle")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("On the other hand, the aggressive Gameplan will see Neura play more aggressively, all while keeping the focus on maximizing EV.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Tight vs. Aggressive")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("A hand for the Bot is with 35% in the call action and 65% in the raise action. This means that the EV difference between call and raise is approximately 0bb.")}

                                            {t("Using the tight Gameplan, the Bot's strategy will change to 100% call, while the aggressive Gameplan will choose 100% raise.")}
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600" id="ev"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">{t("EV measurement")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Real-time feedback.")}</div>

                                        <div className="text-sm pt-8  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("As you make decisions during training, Neura Bot measures the expected value (EV) of each move and compares it to the highest EV decision. This provides immediate feedback on your play and helps you identify areas for improvement.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-[303px] p-0.5  mb-12 from-yellow-500  to-cyan-500 rounded-md">
                                            <Image src="/app-screenshots/lastvsbest-1.png"
                                                className="rounded-md"
                                                alt="Hand details screenshot"
                                                width={301}
                                                height={148}
                                            ></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600"></div>
                                <div className='flex items-center flex-row md:grid md:grid-cols-features gap-6 md:gap-12 md:py-16 py-8' >
                                    <div className="col text-white text-2xl font-bold w-[200px]">
                                        <div className="flex flex-row justify-start px-8 md:px-0 md:justify-center">
                                            <div>
                                                <div className="relative w-20 h-20 md:w-24 md:h-24 group">
                                                    <div className="absolute -inset-[2px] m-[10%] bg-gradient-to-r from-pink-700  to-teal-500 rounded-xl rotate-12 blur-lg md:blur-2xl animate-pulse-slow"></div>
                                                    <div className="absolute -inset-[2px] m-[10%] bg-gradient-to-br from-pink-700 to-teal-500 rounded-xl rotate-6 blur md:blur-lg animate-pulse-slow"></div>
                                                    <div className="absolute -inset-[2px] m-[5%] bg-gradient-to-tr from-amber-400 to-teal-500 rounded-xl opacity-75 blur-sm md:blur animate-pulse-slow"></div>
                                                    <div className="absolute shadow-sm -inset-[2px] bg-gradient-to-r from-pink-700 to-teal-500 rounded-xl animate-pulse-slow saturate-150 shadow-amber-300/50"></div>
                                                    <div className="absolute left-[20%] top-[10%] bottom-[10%] right-[20%] bg-gradient-to-r from-pink-700 to-teal-500 rounded-xl saturate-150 animate-pulse-slow"></div>
                                                    <Image
                                                        className="relative flex items-center w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-xs md:shadow-sm shadow-amber-300/50 "
                                                        width={64}
                                                        height={64}
                                                        alt="poker scientist logo"
                                                        src="/ps-logo-exclusion.svg"
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col items-center justify-start md:justify-center">
                                        <div className="pt-0 md:pt-4 mx-auto text-base font-semibold tracking-tight  text-center lg:mx-0 lg:flex-auto lg:text-center">
                                            <div className="flex flex-col  md:flex-row items-start justify-center gap-2 md:gap-8">
                                                <div className="flex flex-col text-left text-base md:text-2xl pb-2 md:pb-4 font-semibold">
                                                    <div className="text-white">
                                                        {t("Join now:")}
                                                    </div>
                                                    <div className="mx-auto text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-sky-600">
                                                        {t("Unleash your potential!")}
                                                    </div>

                                                </div>
                                                <div className="flex items-center justify-center mt-2 md:mt-4 gap-x-8">
                                                    <a
                                                        href=""
                                                        className="duration-300 rounded px-3.5 py-1.5 leading-7 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-r hover:from-pink-600 hover:via-pink-700 hover:to-pink-800  cursor-pointer text-sm md:text-base font-semibold  text-white hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 "
                                                    >
                                                        {t("Get started")}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-neutral-600" id="spots"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">{t("Spot selection")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Take control of your poker training.")}</div>
                                        <div className="text-sm pt-8  md:text-base  leading-7 pb-4 text-neutral-300">
                                            {t("Choose from a range of cash games, heads-up, or multi-table tournaments to train the spots you want to improve on.")}
                                        </div>
                                        <div className="text-sm md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("Whether you're looking to improve your preflop or postflop play, our Bot has got you covered. Simply select your preferred training mode and get started.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-full p-0.5  mb-12 from-yellow-500  to-cyan-500 rounded-md">
                                            <Image src="/app-screenshots/spot-selection.png"
                                                className="rounded-md"
                                                alt="Hand details screenshot"
                                                width={696}
                                                height={491}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Available training modes")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-2 text-neutral-300">
                                            {t("The practice mode provides a wide range of game types to choose from.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-2 text-neutral-300">
                                            {t("You can select Cash-game with a 100bb stack size and play through various scenarios like Preflop, 2Bet, 3Bet, and 4Bet.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-2 text-neutral-300">
                                            {t("Additionally, MTTs with stack sizes ranging from 10bb to 75bb are available, with additional scenarios like Limp-Call and Limp-Raise-Call, as well as the same Preflop, 2Bet, 3Bet, and 4Bet options.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("There is also a dedicated mode for heads-up play, featuring 100bb stack size and the same Preflop, 2Bet, 3Bet, and 4Bet scenarios.")}
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600" id="switch"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">{t("Switch mode")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Just switch to gameplan mode.")}</div>

                                        <div className="text-sm pt-8  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("And the best part? You can switch to gameplan mode at any time to see how the current spot fits into your overall strategy. With our Bot, you have the tools you need to take your poker game to the next level.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Get the Big Picture")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-4 text-neutral-300">
                                            {t("You can switch between the actual training situation and the gameplan mode whenever you like. This means that while you're playing, you can also take a closer look at the situation in a more strategic way.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("By doing this, you'll get a better understanding of how the current situation fits into your overall strategy and improve your decision-making skills. It'll make learning more effective and help you make better choices in the game, which in turn will help you to progress and succeed.")}
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600" id="results"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">{t("Result tracking")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Pure stats.")}</div>

                                        <div className="text-sm pt-8  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("Take control of your progress with our advanced statistics tracking! Our statistics sheet provides an overview of your results, and you can easily filter by specific positions, in/out-of-position play, bet sizing, game type, and stack size to gain deeper insights into your strengths and weaknesses")}.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Find your leaks")}.
                                        </div>

                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("With this feature, it's easy to identify potential leaks in your play and track your progress over time. By using multiple filters, you have complete control over the information you want to see, making it easier than ever to improve your game")}.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}