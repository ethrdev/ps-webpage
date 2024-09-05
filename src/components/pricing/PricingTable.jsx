import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'


const tiers = [
    {
        name: 'Gameplan',
        id: 'tier-gameplan',
        href: '',
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        mostPopular: false,
    },
    {
        name: 'Bundle',
        id: 'tier-bundle',
        href: '',
        description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
        mostPopular: true,
    },
    {
        name: 'Practice',
        id: 'tier-practice',
        href: '',
        description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
        mostPopular: false,
    },
]
const sections = [
    {
        name: 'Modes',
        features: [
            { name: 'Gameplan mode', tiers: { Gameplan: true, Bundle: true, Practice: false } },
            { name: 'Practice mode', tiers: { Gameplan: false, Bundle: true, Practice: true } },
            { name: 'Mode switching', tiers: { Gameplan: false, Bundle: true, Practice: false } },
        ],
    },
    {
        name: 'Features',
        features: [
            { name: 'Range vs. range view', tiers: { Gameplan: true, Bundle: true, Practice: false } },
            { name: 'Simplifier', tiers: { Gameplan: true, Bundle: true, Practice: false } },
            { name: 'Runout clustering', tiers: { Gameplan: true, Bundle: true, Practice: false } },
            { name: 'Made-Hand distribution', tiers: { Gameplan: true, Bundle: true, Practice: false } },
            { name: 'Runout distribution graph', tiers: { Gameplan: true, Bundle: true, Practice: false } },
            { name: 'Range normalization', tiers: { Gameplan: true, Bundle: true, Practice: false } },
            { name: 'Bot playstyles', tiers: { Gameplan: false, Bundle: true, Practice: true } },
            { name: 'EV measurement', tiers: { Gameplan: false, Bundle: true, Practice: true } },
            { name: 'Results tracking', tiers: { Gameplan: false, Bundle: true, Practice: true } },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function PricingTable() {
    const { t } = useTranslation('pricing');

    return (

        <div className="max-w-5xl px-6 pt-16 pb-24 mx-auto lg:px-8">
            {/* xs to lg */}
            <div className="max-w-md mx-auto mt-12 space-y-8 sm:mt-16 hidden">
                {tiers.map((tier) => (
                    <section
                        key={tier.id}
                        className={classNames(
                            tier.mostPopular ? 'rounded-xl bg-neutral-600/5 ring-1 ring-inset bg-neutral-800' : '',
                            'p-8'
                        )}
                    >
                        <h3 id={tier.id} className="text-sm font-semibold leading-6 text-neutral-100">
                            {tier.name}
                        </h3>
                        
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.mostPopular
                                    ? 'bg-teal-400 text-white hover:bg-teal-500'
                                    : 'text-teal-600 ring-1 ring-inset ring-teal-800 hover:ring-teal-700',
                                'mt-8 block rounded-md py-2 px-3 text-center text-sm leading-6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                            )}
                        >
                            {t("Sign Up")}
                        </a>
                        <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-neutral-100">
                            {sections.map((section) => (
                                <li key={section.name}>
                                    <ul role="list" className="space-y-4">
                                        {section.features.map((feature) =>
                                            feature.tiers[tier.name] ? (
                                                <li key={feature.name} className="flex gap-x-3">
                                                    <CheckIcon className="flex-none w-5 h-6 text-teal-600" aria-hidden="true" />
                                                    <span>
                                                        {t(feature.name)}{' '}
                                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                                            <span className="text-sm leading-6 text-neutral-500">({feature.tiers[tier.name]})</span>
                                                        ) : null}
                                                    </span>
                                                </li>
                                            ) : null
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            {/* lg+ */}
            <div className="hidden mt-20 isolate lg:block">
                <div className="relative -mx-8">
                    <div className="absolute inset-y-0 flex inset-x-4 -z-10">
                        <div
                            className="flex w-1/4 px-4"
                            aria-hidden="true"
                            style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }}
                        >
                            <div className="w-full border-t rounded-t-xl border-x border-neutral-900/10 bg-neutral-600/5" />
                        </div>
                    </div>
                    <table className="w-full text-left border-separate table-fixed border-spacing-x-8">
                        <caption className="sr-only">{t("Pricing plan comparison")}</caption>
                        <colgroup>
                            <col className="w-1/4" />
                            <col className="w-1/4" />
                            <col className="w-1/4" />
                            <col className="w-1/4" />
                        </colgroup>
                        <thead>
                            <tr>
                                <td />
                                {tiers.map((tier) => (
                                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                                        <div className="text-lg font-semibold leading-7 text-neutral-100">{tier.name}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <span className="sr-only">{t("Price")}</span>
                                </th>
                                {tiers.map((tier) => (
                                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                                        <a
                                            href={tier.href}
                                            className={classNames(
                                                tier.mostPopular
                                                    ? 'bg-teal-600 text-white hover:bg-teal-500 hover:text-white'
                                                    : 'text-teal-600 ring-1 ring-inset ring-teal-700 hover:ring-teal-600 no-underlinebanner',
                                                'mt-2 block rounded-md py-2 px-3 text-center text-sm leading-6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                                            )}
                                        >
                                            {t("Sign Up")}
                                        </a>
                                    </td>
                                ))}
                            </tr>
                            {sections.map((section, sectionIdx) => (
                                <Fragment key={section.name}>
                                    <tr>
                                        <th
                                            scope="colgroup"
                                            colSpan={4}
                                            className={classNames(
                                                sectionIdx === 0 ? 'pt-8' : 'pt-16',
                                                'pb-4 text-base font-semibold leading-6 text-neutral-100'
                                            )}
                                        >
                                            {t(section.name)}
                                            <div className="absolute h-px mt-4 inset-x-8 bg-neutral-400/10" />
                                        </th>
                                    </tr>
                                    {section.features.map((feature) => (
                                        <tr key={feature.name}>
                                            <th scope="row" className="py-4 text-sm font-normal leading-6 text-white">
                                                {t(feature.name)}
                                                <div className="absolute h-px mt-4 inset-x-8 bg-neutral-500/5" />
                                            </th>
                                            {tiers.map((tier) => (
                                                <td key={tier.id} className="px-6 py-4 xl:px-8">
                                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                                        <div className="text-sm leading-6 text-center text-neutral-400">
                                                            {feature.tiers[tier.name]}
                                                        </div>
                                                    ) : (
                                                        <>
                                                            {feature.tiers[tier.name] === true ? (
                                                                <CheckIcon className="w-5 h-5 mx-auto text-teal-400" aria-hidden="true" />
                                                            ) : (
                                                                <MinusIcon className="w-5 h-5 mx-auto text-neutral-400" aria-hidden="true" />
                                                            )}

                                                            <span className="sr-only">
                                                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                                            </span>
                                                        </>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
