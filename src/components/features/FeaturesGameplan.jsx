import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ChatBubbleIcon } from '../icons/ChatBubbleIcon'
import { EnvelopeIcon } from '../icons/EnvelopeIcon'
import { UserIcon } from '../icons/UserIcon'
import { UsersIcon } from '../icons/UsersIcon'
import { GridPattern } from '../GridPattern'
import { useTranslation } from 'react-i18next'


const features = [
  {
    href: '/features/study',
    name: 'Range vs. Range',
    description:
      'Effortlessly navigate through the spot.',
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
    href: '/features/study#normalization',
    name: 'Range Normalization',
    description:
      'Customize the weight for each hand combination to perform at your best.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/features/study#simplifier',
    name: 'Simplifier',
    description:
      'Choose from several options for simplifying your GTO-Gameplan with the Simplifier.',
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
    href: '/features/study#clustering',
    name: 'Runout Clustering',
    description:
      'Understanding the different cluster structures opens up a new door to understanding poker.',
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
    href: '/features/study#mhd',
    name: 'Made Hand Distribution',
    description:
      'See the relationship between the perfect strategy for a specific spot and the hand category.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/features/study#runout',
    name: 'Runout Distribution',
    description:
      'See exactly how well the runout is hitting your range or your opponents range',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/features/study#macro',
    name: 'Macro analysis',
    description:
      'Get an overview of values like EV, strategy, EQ & more for all flops of a pre-selected spot',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },

]


function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(420px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          y={undefined} squares={undefined} width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/1 stroke-white/2.5"
          {...gridProps} />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r  opacity-0 transition duration-300 group-hover:opacity-100 from-pink-500/20 to-rose-500/20"
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
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg]  fill-white/2.5 stroke-white/10"
          {...gridProps} />
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
      className="group relative flex h-[300px] rounded-2xl transition-shadow hover:shadow-md  bg-white/2.5 hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="bg-gradient-to-br from-fuchsia-500/2.5 via-pink-600/2.5 to-rose-700/2.5 bg-opacity-30 -z-20 absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
      <div className="relative px-6 pb-4 pt-36 rounded-2xl">
        <div className="flex flex-row items-end justify-start gap-2">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex justify-start text-base md:text-lg lg:text-xl  mt-4 font-semibold leading-7 text-left  text-white">
              <Link href={resource.href}>
                <span className="absolute inset-0 rounded-2xl" />
                {t(resource.name)}
              </Link>
            </div>
            <p className="mt-1 text-sm  text-zinc-400">
              {t(resource.description)}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export function FeaturesGameplan() {
  const { t } = useTranslation('features');

  return (
    <div className="pb-8 my-16 max-w-7xl">
      <p className="px-24 mt-2 text-3xl font-bold tracking-tight text-transparent border-t border-neutral-700 bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 pt-36 sm:text-4xl">Study</p>
      <p className="px-24 mt-6 text-lg leading-8 text-gray-300">
        {t("Our browser-based software gives you access to our GTO gameplan, which contains billions of strategies for every relevant scenario.")}
      </p>
      <div className="grid grid-cols-1 gap-3 pt-10 mt-4 not-prose sm:grid-cols-2 lg:px-16 lg:grid-cols-3">
        {features.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
