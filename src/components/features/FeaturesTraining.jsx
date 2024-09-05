import { ChatBubbleIcon } from '../icons/ChatBubbleIcon'
import { EnvelopeIcon } from '../icons/EnvelopeIcon'
import { UserIcon } from '../icons/UserIcon'
import { UsersIcon } from '../icons/UsersIcon'
import { GridPattern } from './TrainingGridPattern'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'



const features = [
  {
    href: '/features/practice',
    name: 'Bot playstyles',
    description:
      'Choose from two human-like logics and watch your skills soar.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/features/practice#ev',
    name: 'EV measurement',
    description:
      'See strategy and EV differences between your chosen actions and the bot´s actions.',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/features/practice#spots',
    name: 'Spot selection sheet',
    description:
      'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/features/practice#switch',
    name: 'Switch to gameplan',
    description:
      'Choose from a range of games to train the spots you want to improve on.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/features/practice#results',
    name: 'Result tracking',
    description:
      'Identify potential leaks in your play and track your progress.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  
]


function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          y={undefined} squares={undefined} width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg]   fill-white/1 stroke-white/2.5"
          {...gridProps}        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100 from-teal-500/20 to-sky-500/20"
        style={style}
      />
      <motion.div
        className="absolute inset-0 transition duration-300 opacity-0 rounded-2xl mix-blend-overlay group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          y={undefined} squares={undefined} width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg]   fill-white/2.5 stroke-white/10"
          {...gridProps}        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const { t } = useTranslation('features');

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex h-[280px] rounded-2xl transition-shadow hover:shadow-md  bg-white/2.5 hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="bg-gradient-to-br from-teal-600/2.5 via-cyan-600/2.5 to-sky-600/2.5 bg-opacity-30 -z-20  absolute inset-0 rounded-2xl ring-1 ring-inset   ring-white/10 group-hover:ring-white/20" />
      <div className="relative px-6 pb-4 pt-36 rounded-2xl">
        <div className="flex flex-row items-end justify-start gap-2">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex justify-start mt-4 text-base md:text-lg lg:text-xl font-semibold leading-7 text-left text-white">
              <Link href={resource.href}>
                <span className="absolute inset-0  rounded-2xl" />
                {t(resource.name)}
              </Link>
            </div>
            <p className="mt-1 text-sm text-zinc-400">
            {t(resource.description)}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export function FeaturesTraining() {

  const { t } = useTranslation('features');

  return (
    <div className="pb-12 my-8 max-w-7xl">

      <p className="px-24 mt-2 text-3xl font-bold tracking-tight text-transparent border-t bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-700 pt-16  border-white/5 sm:text-4xl">{t("Practice")}</p>
      <p className="px-24 mt-6 text-lg leading-8 text-gray-300">
      {t("Test your skills against our bot. Your decisions will be tracked and measured in terms of frequency and EV to help you identify leaks in your game.")}
      </p>
      <div className="grid grid-cols-1 gap-3 pt-10 mt-4 not-prose sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
        {features.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
