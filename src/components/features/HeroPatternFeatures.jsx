import { GridPattern } from '../GridPattern'

export function HeroPatternFeatures() {
  return (
    <div className="absolute inset-0 mx-0 overflow-hidden -z-10 max-w-none">
      <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-indigo-700/15 to-pink-700/15 opacity-100">
          <GridPattern
            width={72}
            height={56}
            x="-12"
            y="4"
            squares={[
              [4, 3],
              [2, 1],
              [7, 3],
              [10, 6],
            ]}
            className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] mix-blend-overlay fill-white/2.5 stroke-white/5"
          />
        </div>
        <svg
          viewBox="0 0 1113 440"
          aria-hidden="true"
          className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] blur-[26px] hidden"
        >
          <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
        </svg>
      </div>
    </div>
  )
}
