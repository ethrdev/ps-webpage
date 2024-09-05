import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import Link from "next/link"



const navigation = [
    {
        name: 'study',
        label: 'Study',
        current: false,
        href: '/features/study',
    },
    {
        name: 'practice',
        label: 'Practice',
        current: false,
        href: '/features/practice',
    },
    {
        name: 'secure',
        label: 'Secure',
        current: true,
        children: [
            { name: 'safety', label: 'Safety', href: '#' },
            { name: 'identity', label: 'Identity management', href: '#' },
            { name: 'privacy', label: 'User privacy', href: '#' },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function LayoutSecure() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-transparent bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-transparent">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
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
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-transparent text-white'
                                                                : 'bg-transparent text-neutral-400 hover:bg-transparent hover:text-white duration-200',
                                                            'cursor-pointer group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md duration-200'
                                                        )}
                                                    >

                                                        {item.label}

                                                    </Link>
                                                ) : (
                                                    <div key={item.name} className="space-y-1">
                                                       
                                                            <>
                                                               <div
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-transparent text-white'
                                                                            : 'bg-transparent text-neutral-400 hover:bg-transparent hover:text-white duration-200',
                                                                        'cursor-pointer group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 duration-200'
                                                                    )}
                                                                >
                                                                    <span className="flex-1">{item.label}</span>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    {item.children.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.href}
                                                                            className="cursor-pointer group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-neutral-400 hover:bg-transparent hover:text-white duration-200"
                                                                        >

                                                                            {subItem.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </>

                                                    </div>
                                                )
                                            )}
                                        </nav>
                                    </div>
                                    <div className="flex flex-shrink-0 border-t border-transparent p-4">
                                        <a href="#" className="group block flex-shrink-0">
                                            <div className="flex items-center">
                                                <div>
                                                    <img
                                                        className="inline-block h-10 w-10 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </div>

                                            </div>
                                        </a>
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

                            <nav className="flex-1 space-y-1 bg-transparent px-2" aria-label="Sidebar">
                                {navigation.map((item) =>
                                    !item.children ? (
                                        <Link key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-transparent text-white'
                                                        : 'bg-transparent text-neutral-400 hover:bg-transparent hover:text-white duration-200',
                                                    'cursor-pointer group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md duration-200'
                                                )}
                                            >

                                                {item.label}
                                            
                                        </Link>
                                    ) : (
                                        <div key={item.name} className="space-y-1">

                                            <div
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-transparent text-white'
                                                        : 'bg-transparent text-neutral-400 hover:bg-transparent hover:text-white duration-200',
                                                    'cursor-pointer group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 duration-200'
                                                )}
                                            >

                                                <span className="flex-1">{item.label}</span>

                                            </div>
                                            <div className="space-y-1">
                                                {item.children.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        
                                                        href={subItem.href}
                                                        className="cursor-pointer group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-neutral-400 hover:bg-transparent hover:text-white duration-200"
                                                    >

                                                        {subItem.label}
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
                <div className="flex flex-1 flex-col md:pl-64">
                    <div className="sticky top-0 z-10 bg-transparent pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-neutral-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1">
                        <div>
                            <div className="mx-auto max-w-7xl pt-16 px-4 sm:px-6 md:px-20">
                                <h2 className="text-xl font-semibold leading-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-sky-600">Secure</h2>
                                <h1 className="text-4xl mt-4 font-semibold text-white">Placeholder for secure heading</h1>
                                <div className="text-sm pt-8 md:text-base leading-7 pb-16 text-gray-300">
                                    Linear is a tool to remove barriers. Powerful yet simple to use, it helps you to plan ahead, make better decisions and execute faster. You don’t have to come up with best practices for how to use Linear — we already built them directly into the product.
                                </div>
                                <div className="border-b border-neutral-600"></div>
                                <div className='grid grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">Safety</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">Do everything. One issue at a time.</div>

                                        <div className="text-sm pt-8  leading-7 pb-12 text-neutral-300">
                                            Linear is a tool to remove barriers. Powerful yet simple to use, it helps you to plan ahead, make better decisions and execute faster. You don’t have to come up with best practices for how to use Linear — we already built them directly into the product.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Issue Properties
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Add priority, labels, estimates, issue relations, references and due dates to your issues to give more context. Linear also detects YouTube, Descript, Loom and Figma links and will automatically embed them.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Optimized for speed
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Like everything in Linear, creating issues is optimized for speed. Add properties, switch teams and apply templates in a few keystrokes – no mouse required. Properties carry over to new issues and drafts save automatically.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Parent and sub-issues
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Use sub-issues to break down larger tasks into smaller pieces of work. Or group issues together by defining parent issues.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Issue templates
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Use issue templates to write issues faster and guide creators to share information effectively.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Markdown editor
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Issue descriptions and comments support full Markdown.
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">Issue importer
                                        </div>
                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Import issues from your existing issue tracker into Linear. Linear’s issue migration assistant supports Jira, Asana, GitHub Issues and Shortcut.
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600"></div>
                                <div className='grid grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">Identity management</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">Do everything. One issue at a time.</div>

                                        <div className="text-sm pt-8  leading-7 pb-12 text-neutral-300">
                                            Linear is a tool to remove barriers. Powerful yet simple to use, it helps you to plan ahead, make better decisions and execute faster. You don’t have to come up with best practices for how to use Linear — we already built them directly into the product.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Issue Properties
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Add priority, labels, estimates, issue relations, references and due dates to your issues to give more context. Linear also detects YouTube, Descript, Loom and Figma links and will automatically embed them.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Optimized for speed
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Like everything in Linear, creating issues is optimized for speed. Add properties, switch teams and apply templates in a few keystrokes – no mouse required. Properties carry over to new issues and drafts save automatically.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Parent and sub-issues
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Use sub-issues to break down larger tasks into smaller pieces of work. Or group issues together by defining parent issues.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Issue templates
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Use issue templates to write issues faster and guide creators to share information effectively.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Markdown editor
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Issue descriptions and comments support full Markdown.
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">Issue importer
                                        </div>
                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Import issues from your existing issue tracker into Linear. Linear’s issue migration assistant supports Jira, Asana, GitHub Issues and Shortcut.
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600"></div>
                                <div className='grid grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">
                                        <div className="flex pb-16 flex-row justify-center">
                                            <div>
                                                <div className="relative w-24 h-24 group">
                                                    <div className="absolute -inset-[2px] m-[10%] bg-gradient-to-r from-pink-700  to-teal-500 rounded-xl rotate-12 blur-2xl animate-pulse-slow"></div>
                                                    <div className="absolute -inset-[2px] m-[10%] bg-gradient-to-br from-pink-700 to-teal-500 rounded-xl rotate-6 blur-lg animate-pulse-slow"></div>
                                                    <div className="absolute -inset-[2px] m-[5%] bg-gradient-to-tr from-amber-400 to-teal-500 rounded-xl opacity-75 blur animate-pulse-slow"></div>
                                                    <div className="absolute shadow-sm -inset-[2px] bg-gradient-to-r from-pink-700 to-teal-500 rounded-xl animate-pulse-slow saturate-150 shadow-amber-300/50"></div>
                                                    <div className="absolute left-[20%] top-[10%] bottom-[10%] right-[20%] bg-gradient-to-r from-pink-700 to-teal-500 rounded-xl saturate-150 animate-pulse-slow"></div>
                                                    <Image
                                                        className="relative flex items-center w-24 h-24 rounded-xl shadow-sm shadow-amber-300/50 "
                                                        width={64}
                                                        height={64}
                                                        alt="poker scientist logo"
                                                        src="/ps-logo-exclusion.svg"
                                                    ></Image>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col items-center justify-center">
                                        <div className="pt-4 mx-auto text-base font-semibold tracking-tight  text-center lg:mx-0 lg:flex-auto lg:text-center">
                                            <div className="flex flex-row items-start justify-between gap-8">
                                                <div className="flex flex-col text-left text-2xl pb-4 font-semibold">
                                                    <div className="text-white">
                                                        Join now:
                                                    </div>
                                                    <div className="mx-auto text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-sky-600">
                                                        Unleash your potential!
                                                    </div>

                                                </div>
                                                <div className="flex items-center justify-center mt-4 gap-x-8">
                                                    <a
                                                        href="#"
                                                        className="duration-300 rounded px-3.5 py-1.5 leading-7 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-r hover:from-pink-600 hover:via-pink-700 hover:to-pink-800  cursor-pointer text-base font-semibold  text-white hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 "
                                                    >
                                                        Get started
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-neutral-600"></div>
                                <div className='grid grid-cols-features gap-12 pt-16'>
                                    <div className="col text-white text-2xl font-bold w-[200px]">User privacy</div>
                                    <div className="col">
                                        <div className="text-[22px] font-semibold text-neutral-100">Do everything. One issue at a time.</div>

                                        <div className="text-sm pt-8  leading-7 pb-12 text-neutral-300">
                                            Linear is a tool to remove barriers. Powerful yet simple to use, it helps you to plan ahead, make better decisions and execute faster. You don’t have to come up with best practices for how to use Linear — we already built them directly into the product.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Issue Properties
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Add priority, labels, estimates, issue relations, references and due dates to your issues to give more context. Linear also detects YouTube, Descript, Loom and Figma links and will automatically embed them.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Optimized for speed
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Like everything in Linear, creating issues is optimized for speed. Add properties, switch teams and apply templates in a few keystrokes – no mouse required. Properties carry over to new issues and drafts save automatically.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Parent and sub-issues
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Use sub-issues to break down larger tasks into smaller pieces of work. Or group issues together by defining parent issues.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Issue templates
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Use issue templates to write issues faster and guide creators to share information effectively.
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">
                                            Markdown editor
                                        </div>

                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Issue descriptions and comments support full Markdown.
                                        </div>
                                        <div className="text-sm md:text-base text-neutral-100 font-bold pb-4">Issue importer
                                        </div>
                                        <div className="text-sm  leading-7 pb-12 text-neutral-300">
                                            Import issues from your existing issue tracker into Linear. Linear’s issue migration assistant supports Jira, Asana, GitHub Issues and Shortcut.
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-neutral-600"></div>

                            </div>
                        </div>

                    </main>
                </div>
            </div>

        </>
    )
}