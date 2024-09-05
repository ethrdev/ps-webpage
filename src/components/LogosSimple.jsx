import { useTranslation } from 'react-i18next'

export function LogosSimple() {
  const { t } = useTranslation('home');

  return (

    <div className="px-4 pt-16 lg:pt-32 pb-8 lg:pb-16 mx-auto lg:max-w-7xl lg:px-8">
      <p className="text-sm lg:text-lg font-medium text-center text-neutral-500 font-inter">
        {t("As seen on")}
      </p>
      <div className="grid md:pt-12 pt-8 grid-cols-2 gap-6 lg:gap-8 lg:grid-cols-4">
        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img className="h-6 lg:h-12" height={48} src="/rio.png" alt="Run It Once" />
        </div>
        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img className="h-6 lg:h-12" height={48} src="/natural8.png" alt="Natural 8" />
        </div>
        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img className="h-8 lg:h-16" height={64} src="/americas-cardroom.png" alt="Americas Cardroom" />
        </div>
        <div className="flex justify-center col-span-1 gap-2 lg:gap-6 md:col-span-3 lg:col-span-1">
          <img
            className="h-6 lg:h-12"
            height={48}
            src="/poker-strategy.png"
            alt="Poker Strategy"

          />
          <img
            className="self-center h-4 lg:h-8 pb-2 "
            src="/ps.png"
            alt="Poker Strategy"
            height={32}
          />

        </div>
      </div>
    </div>

  )
}