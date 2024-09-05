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
        current: true,
        children: [
            { name: 'range', label: 'Range vs. Range', href: '#range' },
            { name: 'normalization', label: 'Range normalization', href: '#normalization' },
            { name: 'simplifier', label: 'Simplifier', href: '#simplifier' },
            { name: 'clustering', label: 'Runout clustering', href: '#clustering' },
            { name: 'mhd', label: 'Made-hand distribution', href: '#mhd' },
            { name: 'runout', label: 'Runout distribution graph', href: '#runout' },
            { name: 'macro', label: 'Macro analysis', href: '#macro' },
        ],
    },
    {
        name: 'practice',
        label: 'Practice',
        current: false,
        href: '/features/practice',
        children: [
            { name: 'playstyles', label: 'Bot playstyles', href: '/features/practice#playstyles' },
            { name: 'ev', label: 'EV measurement', href: '/features/practice#ev' },
            { name: 'spots', label: 'Spot selection sheet', href: '/features/practice#spots' },
            { name: 'switch', label: 'Switch mode', href: '/features/practice#switch' },
            { name: 'results', label: 'Result tracking', href: '/features/practice#results' },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function LayoutStudy() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { t } = useTranslation('features');

    return (
        <>
            <div >
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
                                                    <><Link key={item.name}
                                                        onClick={() => setSidebarOpen(false)}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:from-teal-600 hover:via-teal-700 hover:to-teal-800'
                                                                : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:from-teal-600 hover:via-teal-700 hover:to-teal-800',
                                                            'cursor-pointer group w-full flex items-center pl-2 pr-1 py-0.5 text-left text-base font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-300 duration-200'
                                                        )}
                                                    >

                                                        {item.label}

                                                    </Link>
                                                        <div className="space-y-1">
                                                            {item.children.map((subItem) => (
                                                                <Link
                                                                    onClick={() => setSidebarOpen(false)}
                                                                    key={subItem.name}
                                                                    href={subItem.href}
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
                                                ) : (
                                                    <div key={item.name} className="space-y-1">

                                                        <>
                                                            <div
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700'
                                                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 ',
                                                                    'cursor-pointer group w-full flex items-center pl-2 pr-1 py-0.5 text-left text-base font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-300 duration-200'
                                                                )}
                                                            >

                                                                <span className="flex-1">{t(item.label)}</span>

                                                            </div>
                                                            <div className="space-y-1">
                                                                {item.children.map((subItem) => (
                                                                    <Link
                                                                        onClick={() => setSidebarOpen(false)}
                                                                        key={subItem.name}
                                                                        href={subItem.href}
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
                                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:from-teal-600 hover:via-teal-700 hover:to-teal-800'
                                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:from-teal-600 hover:via-teal-700 hover:to-teal-800',
                                                'cursor-pointer group w-full flex items-center pl-2 py-2 text-base font-semibold rounded-md duration-200'
                                            )}
                                        >

                                            {t(item.label)}

                                        </Link>
                                    ) : (
                                        <div
                                            key={item.name} className="space-y-1">

                                            <div
                                                className={classNames(
                                                    item.current
                                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700'
                                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700',
                                                    'cursor-pointer group w-full flex items-center pl-2 pr-1 py-2 text-left text-base font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-300 duration-200'
                                                )}
                                            >

                                                <span className="flex-1">{t(item.label)}</span>

                                            </div>
                                            <div className="space-y-1">
                                                {item.children.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="cursor-pointer group flex w-full items-center rounded-md py-2 pl-4 pr-2 text-sm font-medium text-neutral-400 hover:bg-transparent hover:text-white duration-200"
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
                    <main className="flex-1 justify-center">
                        <div>
                            <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:px-20">
                                <h2 className="text-xl font-semibold leading-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-600 to-red-700">{t("Study")}</h2>
                                <h1 className="text-4xl mt-4 font-semibold text-white">{t("Data-driven analysis and visualization")}</h1>
                                <div className="text-sm pt-8 md:text-base leading-7 pb-4 text-gray-300">
                                    {t("Poker Scientist stands out from the competition for a number of reasons. First and foremost, our solver produces the most accurate gameplan solutions in the world, with a Nash-Distance between 0.01 - 0.15% pot per hand. This level of accuracy allows us to distinguish the origin of all frequencies for strategies between 'balancing' and 'rounding-error'.")}
                                </div>

                                <div className="border-b border-neutral-600" id="range" ></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 pb-4 md:pb-0 flex-row row md:col md:text-white md:text-2xl md:font-bold w-[200px]">{t("Range vs. Range")}</div>
                                    <div className="flex-row row md:col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("All the information you need in one single sheet.")}</div>

                                        <div className="text-sm md:text-base pt-8 leading-7 pb-12 text-neutral-300">
                                            {t("With the Range versus Range view, you can easily navigate through the spot using action buttons and visualize the strategies of each player with a matrix.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Range matrix")}
                                        </div>
                                        <div className="bg-gradient-to-r w-full md:w-[320px] p-0.5 mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/matrix1.png"
                                                className="rounded-md"
                                                alt="Matrix screenshot"
                                                width={569}
                                                height={570}
                                            ></Image>

                                        </div>
                                        <div className="text-sm md:text-base leading-7 pb-12 text-neutral-300">
                                            {t("The Range Matrix feature offers a complete overview of all possible preflop card combinations that a player can hold, displayed in a matrix format along with the corresponding strategy frequencies and expected values (EVs) for each hand combination.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Switch between Equity and EV view")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                            {t("With the Range Matrix feature, you can easily switch between two different visualization modes. The first mode displays the strategy frequencies of the possible preflop card combinations, while the second mode shows the expected value (EV) in both numerical and color-coded formats, providing you with comprehensive insights to help improve your poker game.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-full md:w-[320px] p-0.5 mb-12 from-purple-500 to-rose-500 rounded-md">

                                            <Image src="/app-screenshots/matrix2.png"
                                                className="rounded-md"
                                                alt="Matrix screenshot"
                                                width={567}
                                                height={567}
                                            ></Image>
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Hand details view")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                            {t("The Hand Details view feature allows you to view specific details of a preflop hand combination within a hand combination group. You can see the expected value (EV) and frequency of each possible action for that particular hand combination.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-full md:w-[320px] p-0.5  mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/hand-details-2.png"
                                                className="rounded-md"
                                                alt="Hand details screenshot"
                                                width={316}
                                                height={310}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Player comparison")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                            {t("With the Player Comparison feature, you can directly compare the expected value (EV), hand combinations, and pot sizes of two players side by side. This allows for a quick and easy analysis of how each player's range and decisions are affecting the overall outcome of the game.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-full md:w-[320px] p-0.5  mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/comparison.png"
                                                className="rounded-md"
                                                alt="Player comparison screenshot"
                                                width={316}
                                                height={209}
                                            ></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600" id="normalization"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 pb-4 md:pb-0 flex-row row md:col md:text-white md:text-2xl md:font-bold w-[200px]">{t("Range normalization")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Customize the weight for each hand combination.")}</div>
                                        <div className="text-sm md:text-base  pt-8 pb-12 leading-7 text-neutral-300">
                                            {t("The normalization changes the color space for each cell in the matrix, and it's proportional to the weight and frequency of each cell.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-2">
                                            {t("Normalized")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 text-neutral-300">
                                            {t("Think about a river situation where the weight for a hand is low due to all the other potential outcomes. With the relative view, it can be difficult to gather any meaningful information from the matrix.")}
                                        </div>
                                        <div className="text-sm md:text-base  pt-4 pb-12  leading-7 text-neutral-300">
                                            {t("That's why we offer the option to change the view to normalized. It provides a clearer picture of the hands in the ranges.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 pb-2 font-bold">
                                            {t("Absolute")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                            {t("But what if you still need more insight? No problem. The 'Absolute' function gives you an even more in-depth view of the strategy for every possible hand. The space of each cell is described by the normalization feature, following the mathematical description. This allows you to make informed decisions and play your best game.")}
                                        </div>
                                        {/*
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Comaprison of the three views
                                        </div>
                                        <div className="text-sm  leading-7 pb-0 text-neutral-700">
                                            Relative = weight*frequency
                                        </div>
                                        <div className="text-sm  leading-7 pb-4 text-neutral-700">
                                            Explanation: This is showing you the raw data displayed via the matrix.
                                        </div>
                                        <div className="text-sm  leading-7 pb-0 text-neutral-700">
                                            Absolute = (weight/weight)*frequency = frequency
                                        </div>
                                        <div className="text-sm  leading-7 pb-4 text-neutral-700">
                                            Explanation: information of weight is removed which leads to the case that only the frequency is shown which is always between 0-100%.
                                        </div>
                                        <div className="text-sm  leading-7 pb-0 text-neutral-700">
                                            Normalized = max f(weight*freqeuency) transform to 100%
                                            (I) only weight is allowed to change by a factor of x.
                                            (ii) Each cell will be multiplied by x.
                                        </div>
                                        <div className="text-sm  leading-7 pb-12 text-neutral-700">
                                            Explanation(Example): The hand combination 'QQ' has the maximum value of weight*frequency = 0,5*0,5 = 0,25.
                                        </div>
*/}
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600" id="simplifier"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 pb-4 md:pb-0 flex-row row md:col md:text-white md:text-2xl md:font-bold w-[200px]">{t("Simplifier")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Simplify your gameplan.")}</div>
                                        <div className="text-sm md:text-base pt-8 leading-7 pb-12 text-neutral-300">
                                            {t("The Simplifier tool allows you to manipulate the GTO-Strategies by adding or removing actions, which has a direct impact on the measured Range-EV.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-[268px] p-0.5  mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/simplifier-2.png"
                                                className="rounded-md"
                                                alt="Simplifier screenshot"
                                                width={266}
                                                height={271}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Algorithm")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-2 text-neutral-300">
                                            {t("Our Simplification algorithm manipulates the Gameplan in a way that minimizes EV loss when removing an action, or maximizes EV gain when adding an action.")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                            {t("This algorithm goes beyond the Nash algorithm, allowing for strategies that are not necessarily balanced. When you remove an action, the hands that would have used that action will be directed to the alternative action with the second highest EV instead.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Simplification made easy")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-2 text-neutral-300">
                                            {t("To see how it works, let's consider a Raw GTO-Strategy:")}
                                            {t("Removing the raising actions is a good way to simplify, even if the R 17.4 has a frequency of 14.5%. If we remove the raising actions, the new strategy will only have a fold/- and a callpart, and we will not lose any relevant Range-EV.")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-2 text-neutral-300">
                                            {t("However, if we remove a further action, our Range-EV will decrease significantly. On the other hand, if we go back to the Raw GTO-Strategy and directly remove the callnode, keeping the raise actions possible, we will only lose 2bb/100 with this strategy.")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                            {t("The Simplifier algorithm shows you how to take advantage of several options for simplifying your GTO-Gameplan.")}
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

                                <div className="border-b border-neutral-600" id="clustering"></div>
                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 pb-4 md:pb-0 flex-row row md:col md:text-white md:text-2xl md:font-bold w-[200px]">{t("Runout clustering")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("Reduce the number of different strategies.")}</div>

                                        <div className="text-sm md:text-base  pt-8  leading-7 pb-12 text-neutral-300">
                                            {t("Simplifying your strategy leads to fewer mistakes and an increase in your win rate. That's why we created the Runout Clustering feature.")}
                                        </div>
                                        <div className="bg-gradient-to-r w-full p-0.5  mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/clustering.png"
                                                className="rounded-md"
                                                alt="Clustering screenshot"
                                                width={1676}
                                                height={621}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("The clustering process")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-4 text-neutral-300">
                                            {t("On average, there are 6900 action nodes for a 2-Bet spot, with over 16 million possible strategies. With every scenario, there's a chance to make a mistake that could reduce your win rate. That's why it's crucial to keep your game plan as simple as possible.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-4 text-neutral-300">
                                            {t("We've simplified the game plan by comparing each runout with every other runout. Each runout has a specific strategy, defined by the frequency of possible moves, weighted by a parameter that represents the relative value of different lines.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-4 text-neutral-300">
                                            {t("For example, an all-in frequency gap is weighted higher than a frequency gap for a check.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                        {t("We used a 2-dimensional clustering method to find the minimum number of different clusters, without losing Range-EV for any player. The result is that the 49 turn runouts become grouped or clustered. Each cluster has a representative card with the smallest strategy difference between all cards in the cluster.")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                        {t("Levels of simplification")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-8 text-neutral-300">
                                        {t("Each player has their own Runout Clustering, which is likely to be different from the other players in the same situation. Here are three examples of different levels of simplification:")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-2">
                                        {t("High-Level simplification")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-8 text-neutral-300">
                                        {t("In a Cashgame 3Bet MPvsBU, the strategy for BU simplifies from 49 to 2 different strategies on turn without any EV loss. (96% simplified)")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-2">
                                        {t("Medium-Level simplification")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-8 text-neutral-300">
                                        {t("In an MTT 25bb SRP BUvsBB, the strategy for BU simplifies from 49 to 12 different strategies on the river (75% simplified)")}
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-2">
                                        {t("Low-Level simplification")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                        {t("In a Cashgame 2Bet BUvsBB, the strategy for BB simplifies from 49 to 21 strategies on turn (57% simplified)")}
                                        </div>

                                        <div className="text-sm md:text-base   leading-7 pb-4 text-neutral-300">
                                        {t("It's interesting to note that you can have the same strategy for two different cards in a cluster, even though they have a big difference in their Runout-EVs. This shows that there can be multiple, different reasons for having a particular strategy.")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-12 text-neutral-300">
                                        {t("We save the result of each Runout Clustering calculation on our backend, so you only have to calculate it once. Understanding the different cluster structures opens up a new door to understanding poker.")}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-neutral-600" id="mhd"></div>

                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 pb-4 md:pb-0 flex-row row md:col md:text-white md:text-2xl md:font-bold w-[200px]">{t("Made-hand distribution")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("A hand category overview")}.</div>

                                        <div className="text-sm md:text-base  pt-8  leading-7 pb-12 text-neutral-300">
                                            {t("The Made-Hand distribution feature classifies hands into 18 groups and helps improve game strategy by showing the frequency of hand groups in specific actions and the likelihood of having a specific hand class in the current range")}.
                                        </div>
                                        <div className="bg-gradient-to-r w-[204px] p-0.5  mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/mhd-draws.png"
                                                className="rounded-md"
                                                alt="Made hand distribution screenshot"
                                                width={202}
                                                height={320}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Hand properties")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-4 text-neutral-300">
                                            {t("Here's how it works: like mentioned the Made-Hand Distribution classifies hands into 18 different groups based on their properties. The properties of a hand are related to the board structure and can have a big impact on your strategy. With this feature, you'll be able to see the relationship between the perfect strategy for a specific spot and the hand class, like having a flush draw or set")}.
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("With this feature, you'll be able to see the relationship between the perfect strategy for a specific spot and the hand class, like having a flush draw or set")}.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Distribution types")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-4 text-neutral-300">
                                            {t("And it gets even better - the feature provides two different distributions: one that shows how often a hand group results in a specific action, visualized by the color of the hand class bar, and another that shows how likely it is for you to have a specific hand class in your current range.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("With the Made-Hand Distribution, you'll have all the information you need to understand which type of hand class you have in a certain action, and how likely it is.")}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-neutral-600" id="runout"></div>

                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 pb-4 md:pb-0 flex-row row md:col md:text-white md:text-2xl md:font-bold w-[200px]">{t("Runout distribution graph")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("A comprehensive analysis of runouts")}.</div>
                                        <div className="text-sm md:text-base  pt-8  leading-7 pb-12 text-neutral-300">
                                            {t("With the Runout-Distribution feature, you can easily see the impact of the runout on your range or your opponent's range, measured by expected value (EV) using a table and graph")}.
                                        </div>
                                        <div className="bg-gradient-to-r w-full p-0.5  mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/runouts.png"
                                                className="rounded-md"
                                                alt="Runouts screenshot"
                                                width={1856}
                                                height={533}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("The graphs")}
                                        </div>
                                        <div className="text-sm md:text-base   leading-7 pb-4 text-neutral-300">
                                            {t("The two graphs are anti-symmetric, allowing you to quickly get a full understanding of the game at a glance.")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("For example, if the runout is a spade, a minimum in the graph for the in-position player might indicate that they have fewer flush draws than the out-of-position player. This information is essential for making informed decisions on the next street")}.
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600" id="macro"></div>

                                <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 pb-4 md:pb-0 flex-row row md:col md:text-white md:text-2xl md:font-bold w-[200px]">{t("Macro analysis")}</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">{t("The big picture")}.</div>
                                        <div className="text-sm pt-8  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("The Macro-Analysis feature gives you an overview of values like Range-EV, strategy, EQ, EQ-Realization and more for all flops of a pre-selected spot")}.
                                        </div>
                                        <div className="bg-gradient-to-r flex justify-center w-full p-0.5  mb-12 from-purple-500 to-rose-500 rounded-md">
                                            <Image src="/app-screenshots/macro.png"
                                                className="rounded-md"
                                                alt="Macro analysis screenshot"
                                                width={1873}
                                                height={588}
                                            ></Image>
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Filters")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("This enables you to compare strategies for different flops. It comes with two filter functions, suitedness and pairing. You can order any value from high to low or vice versa, making it easy to determine the best or worst flops for you. The average values are displayed at the top of the table")}.
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            {t("Get the ultimate overview")}
                                        </div>
                                        <div className="text-sm  md:text-base  leading-7 pb-12 text-neutral-300">
                                            {t("With this feature, you can easily find out things like: on which type of flops you should use a big bet or check back most of the time, which flops connect well with your range or your opponent's range, and how the Range-EV is connected to your preferred strategy")}.
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