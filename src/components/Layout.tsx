import React from 'react'
import { Prose } from './Prose'
import { FooterWithNewsletter } from './FooterWithNewsletter'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" lg:flex lg:justify-center">
      <div className="hidden bg-neutral-900 lg:flex lg:justify-center"></div>

      {/*<Navigation className="hidden lg:mt-10 lg:block" />*/}

      <div className="relative px-4 sm:px-6 lg:px-8">
        <main className="py-16">
          <Prose as="article" className={undefined}>{children}</Prose>
        </main>
        <FooterWithNewsletter />
      </div>
    </div>
  )
}
