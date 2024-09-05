import Image from 'next/image'
import { useTranslation } from 'react-i18next'


const people = [
    {
        name: 'Mario "livinmydream1" Mosböck',
        role: 'Champion of the SCOOP Main Event 2021 for $839,000 and MTT Highstakes Player',
        imageUrl:
            '/mosboeck.png',
        bio: 'Being able to see the GTO solution to any question I had during a session right after, was one of the biggest improvement for my career.',
    },
    {
        name: 'Courtney "Courtiebee" Gee',
        role: 'Member of Team Partypoker, MTT midstakes grinder and streamer',
        imageUrl:
            '/courty.png',
        bio: 'Gone are the days of wanting to review a hand and having to wait minutes or even hours to get a solution. Poker Scientist is easy to use and extremely convenient.',
    },
    {
        name: 'Torsten "Jektiss" Brinkmann',
        role: '2nd in EPT Grand Final for $1.3 Million and NL500 Player',
        imageUrl:
            '/Jektiss.png',
        bio: 'For me Poker Scientist is the most efficient way to improve my game. It is fast and simple. All I need!',
    },
    {
        name: 'Nick "eastyy22" Eastwood',
        role: 'Member of 888Poker Team, Twitch streamer and YouTuber',
        imageUrl:
            '/eastyyy.png',
        bio: 'Poker Scientist has been a game changer for my study. Without a lot of spare time, it is invaluable to me to have a study tool that is so fast, easy and effective.',
    },
]

export function Promoter() {
    const { t } = useTranslation('home');

    return (

        <div className="px-4 pt-16 lg:pt-32 pb-8 lg:pb-16 mx-auto lg:max-w-7xl lg:px-8">
           
            <ul
                role="list"
                className="grid max-w-2xl grid-cols-1 mx-auto gap-x-6 gap-y-12 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-12 xl:max-w-none"
            >
                {people.map((person) => (
                    <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                        <Image className="flex-none lg:object-cover rounded-sm lg:rounded-lg h-26 lg:h-52 w-26 lg:w-52" src={person.imageUrl} width={104} height={104} alt="" />
                        <div className="flex-auto">
                            <h3 className="text-base lg:text-lg font-semibold leading-4 lg:leading-8 tracking-tight text-neutral-100">{person.name}</h3>
                            <p className="text-xs mt-1 lg:text-sm leading-4 lg:leading-5 text-neutral-500">{t(person.role)}</p>
                            <p className="mt-2 lg:mt-6 text-sm lg:text-base leading-4 lg:leading-7 text-neutral-300">{t(person.bio)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
