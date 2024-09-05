import Link from "next/link"
import Image from "next/image"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from "../LanguageSwitch";

export default function LayoutChangelog() {
    const { t } = useTranslation('changelog');


    return (
        <main className="flex-1 justify-center">
            <div>
                <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:px-20">
                    <div className="text-5xl mt-4 font-semibold text-white">{t("Changelog")}</div>
                    <div className="text-sm pt-6 md:text-base leading-7 text-gray-400">
                        {t("New updates and improvements to Poker Scientist.")}
                    </div>
                    <Link href="" passHref target="_blank">
                        <div className="pb-12 pt-2">
                            <div className="text-sm text-pink-600 hover:text-white  md:text-base font-semibold">{t("Follow us on Twitter")}</div>
                        </div>
                    </Link>

                    {/* Actual POst 
                    <div className="border-b border-neutral-600" id="range" ></div>
                    <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                        <div className="text-sm md:text-base leading-7 text-gray-400 w-[200px]">April 07, 2023</div>
                        <div className="flex-row row md:col">
                            <div className="text-2xl font-semibold text-neutral-50">Help sidebar</div>

                            <div className="text-sm md:text-base pt-8 leading-7 pb-4 text-neutral-300">
                                We released a new feature we have been working on to improve your user experience: the Help sidebar. We have listened to your feedback and have implemented a more accessible and efficient way for you to access help information, documentation articles, and hotkey overviews.
                            </div>
                            <div className="text-sm md:text-base leading-7 pb-12 text-neutral-300">
                                Here is a summary of the updates in the Help sidebar:
                            </div>
                            <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                Open Help sidebar with 'h' hotkey
                            </div>
                            <div className="text-sm md:text-base leading-7 pb-12 text-neutral-300">
                                To make the Help sidebar easily accessible, we have added a new hotkey. Now, you can simply press the 'h' key to open the sidebar instantly. This should save you time and help you get the assistance you need with minimal disruption to your workflow.
                            </div>
                            <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                Mode-specific help information
                            </div>
                            <div className="text-sm md:text-base leading-7 pb-12 text-neutral-300">
                                The Help sidebar now shows context-sensitive help information based on the mode you're currently in. This means that you will see relevant help and guidance for the specific task you are working on, making it easier to find the answers you need without having to search through unrelated information.
                            </div>
                            <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                Links to documentation articles and hotkey overviews
                            </div>
                            <div className="text-sm md:text-base leading-7 pb-12 text-neutral-300">
                                We have made it simpler for you to access our extensive documentation and hotkey overviews. Within the Help sidebar, you'll find links to relevant articles and resources to assist you in navigating and mastering our platform. This should help you find the information you need quickly and efficiently.
                            </div>
                        </div>
                    </div>
*/}

                    <div className="border-b border-neutral-600" id="range" ></div>
                    <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16 pb-2' >
                        <div className="text-sm md:text-base leading-7 text-gray-400 w-[200px]">{t("July 05, 2023")}</div>
                        <div className="flex-row row md:col">
                            <div className="text-2xl font-semibold text-neutral-50">{t("Korean language support")}</div>

                            <div className="text-sm md:text-base pt-8 leading-7 pb-4 text-neutral-300">
                                {t("our web app is now available in Korean. This is part of our ongoing efforts to make our app more accessible to users worldwide. You can switch to Korean from the language selection option in the settings. We'd love to hear your feedback and improve upon this, if needed. Please note that our support for new languages is always growing. If there's a specific language you'd like to see supported, please let us know.")}
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-neutral-600" id="range" ></div>
                    <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                        <div className="text-sm md:text-base leading-7 text-gray-400 w-[200px]">{t("April 07, 2023")}</div>
                        <div className="flex-row row md:col">
                            <div className="text-2xl font-semibold text-neutral-50">{t("Help Sidebar")}</div>

                            <div className="text-sm md:text-base pt-8 leading-7 pb-4 text-neutral-300">
                                {t("We released a new feature we've been working on to improve your user experience: the Help sidebar. We've listened to your feedback and have implemented a more accessible and efficient way for you to access help information, documentation articles, and hotkey overviews.")}
                            </div>
                            <div className="text-md md:text-xl leading-7 pb-12 text-neutral-50 font-semibold">
                                {t("Help Sidebar Updates:")}
                            </div>
                            <div className="flex flex-row gap-1 bg-gradient-to-r p-0.5 w-[768px] mb-12 from-purple-500 to-rose-500 rounded-md">
                                <Image src="/app-screenshots/help-sidebar_01.png"
                                    className="rounded-md"
                                    alt="Simplifier screenshot"
                                    width={380}
                                    height={988}
                                ></Image>
                                <Image src="/app-screenshots/help-sidebar_02.png"
                                    className="rounded-md"
                                    alt="Simplifier screenshot"
                                    width={380}
                                    height={988}
                                ></Image>
                            </div>
                            <div className="text-base md:text-lg text-neutral-100 font-bold pb-4">
                                1. {t("Open Help sidebar with 'h' hotkey")}
                            </div>
                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("To make the Help sidebar easily accessible, we have added a new hotkey. Now, you can simply press the 'h' key to open the sidebar instantly. This should save you time and help you get the assistance you need with minimal disruption to your workflow.")}
                            </div>
                            <div className="text-base md:text-lg text-neutral-100 font-bold pb-4">
                                2. {t("Mode-specific help information")}
                            </div>
                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("The Help sidebar now shows context-sensitive help information based on the mode you're currently in. This means that you will see relevant help and guidance for the specific task you are working on, making it easier to find the answers you need without having to search through unrelated information.")}
                            </div>
                            <div className="text-base md:text-lg text-neutral-100 font-bold pb-4">
                                3. {t("Links to documentation articles and hotkey overviews")}
                            </div>
                            <div className="text-sm md:text-base leading-7 pb-12 text-neutral-300">
                                {t("We have made it simpler for you to access our extensive documentation and hotkey overviews. Within the Help sidebar, you'll find links to relevant articles and resources to assist you in navigating and mastering our platform. This should help you find the information you need quickly and efficiently.")}
                            </div>
                            <div className="text-2xl font-semibold text-neutral-50 pb-6">
                                {t("Improvements & Fixes:")}
                            </div>
                            <ul className="pl-6 pb-12">
                                <li className="text-sm md:text-base text-neutral-100 font-bold pb-2 list-disc">
                                    {t("Better Navigation with 'Focus'")}
                                    <span className="text-sm md:text-base font-normal leading-7 pl-3 pb-4 text-neutral-300 inline">
                                        {t("We've enhanced the navigation within our app by implementing a clearer focus state. This update will make it easier for users to see which element is currently active on the screen.")}
                                    </span>
                                </li>
                                <li className="text-sm md:text-base text-neutral-100 font-bold pb-2 list-disc">
                                    {t("Tab Key for Forward Navigation:")}
                                    <span className="text-sm md:text-base font-normal leading-7 pl-3 pb-4 text-neutral-300 inline">
                                        {t("We've added the ability to use the 'Tab' key to quickly navigate to the next interactive element on the screen. This allows users to move through the app with ease, without having to rely on the mouse.")}
                                    </span>
                                </li>
                                <li className="text-sm md:text-base text-neutral-100 font-bold pb-2 list-disc">
                                    {t("Shift + Tab Key for Reverse Navigation:")}
                                    <span className="text-sm md:text-base font-normal leading-7 pl-3 pb-4 text-neutral-300 inline">
                                        {t("To complement the 'Tab' key navigation, we've also introduced the 'Shift + Tab' key combination for reverse navigation. This allows users to move back to the previous interactive element on the screen.")}
                                    </span>
                                </li>
                                <li className="text-sm md:text-base text-neutral-100 font-bold pb-2 list-disc">
                                    {t("Enter or Space Key to 'Click' an Element:")}
                                    <span className="text-sm md:text-base font-normal leading-7 pl-3 pb-4 text-neutral-300 inline">
                                        {t("To improve overall accessibility, we've made it possible to use the 'Enter' or 'Space' key to 'click' an element. This makes it easier for users who rely on keyboard navigation to interact with buttons and other interactive elements within the app.")}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-neutral-600" id="normalization"></div>
                    <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16' >
                        <div className="text-sm md:text-base leading-7 text-gray-400 w-[200px]">{t("April 06, 2023")}</div>
                        <div className="col">
                            <div className="text-2xl font-semibold text-neutral-50 pb-12">{t("Hotkeys and Command menu")}</div>
                            <div className="flex flex-row gap-1 bg-gradient-to-r p-0.5 w-[604px] mb-12 from-purple-500 to-rose-500 rounded-md">
                                <Image src="/app-screenshots/command-menu.png"
                                    className="rounded-md"
                                    alt="Simplifier screenshot"
                                    width={600}
                                    height={438}
                                ></Image>
                            </div>
                            <div className="text-sm md:text-base pt-8 leading-7 pb-4 text-neutral-300">
                                {t("We're excited to announce two new navigation features that will make using Poker Scientist even easier and faster than before!")}
                            </div>

                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("First, we've introduced a new command menu that allows you to quickly access different sections of the app. To open the command menu, simply press 'Meta + k' or 'Win + k' on your keyboard. From there, you can choose between Study mode, Practice mode, Stats overview, Settings, Profile, Changelog, Documentation, and more. The command menu has a clean and intuitive design that makes it easy to find what youre looking for, and the fast navigation means you can move around the app more quickly than ever before.")}
                            </div>

                            <div className="text-sm md:text-base leading-7 pb-12 text-neutral-300">
                                {t("Second, we've added hotkeys for both the study mode and the practice mode. These hotkeys allow you to perform common actions without having to click on buttons or menus. In the study mode, you can use hotkeys to choose your action, configure your spot, switch between range display modes, and open the macro analysis. In the Practice mode, you can use hotkeys to choose your action and move on to the next hand, as well as navigate through the different options available to you. These hotkeys will make it easier to use Poker Scientist more efficiently and with greater precision.")}
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-neutral-600" id="normalization"></div>
                    <div className='sm:flex sm:flex-row md:grid md:grid-cols-features gap-12 pt-16 pb-16' >
                        <div className="text-sm md:text-base leading-7 text-gray-400 w-[200px]">{t("March 31, 2023")}</div>
                        <div className="col">
                            <div className="text-2xl font-semibold text-neutral-50 pb-12">{t("Documentation web page")}</div>
                            <div className="flex flex-row gap-1 p-0.5 w-[768px] mb-12 rounded-md">
                                <Image src="/app-screenshots/documentation.png"
                                    className="rounded-md"
                                    alt="Simplifier screenshot"
                                    width={1920}
                                    height={1005}
                                ></Image>

                            </div>
                            <div className="text-sm md:text-base pt-8 leading-7 pb-4 text-neutral-300">
                                {t("This new resource is designed to provide users with a deeper understanding of our application's features and the poker-related knowledge necessary for mastering GTO strategies.")}
                            </div>

                            {/*}
                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("The documentation page includes:")}
                            </div>
                            */}
                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("Gain a better understanding of how each feature works, from the revamped Gameplan mode to the Last vs. Best information in Practice mode. Learn how to make the most of these tools to improve your poker skills effectively.")}
                            </div>

                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("Explore the core concepts and principles of Game Theory Optimal (GTO) strategies. Understand the importance of GTO in modern poker and how it can provide a solid foundation for your gameplay.")}
                            </div>

                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("Follow our easy-to-understand guides and tutorials to get started with the Poker Scientist application. Learn how to navigate the platform, analyze your hand history, and practice using GTO strategies in various poker situations.")}
                            </div>

                            <div className="text-sm md:text-base leading-7 pb-4 text-neutral-300">
                                {t("By incorporating this documentation page into our platform, we aim to provide users with a comprehensive resource that aids in the study of GTO and improves their overall poker understanding.")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

