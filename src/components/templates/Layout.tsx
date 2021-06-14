import Head from 'next/head'
import React, { ReactNode } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Main from '@/components/organisms/Main'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.VFC<Props> = React.memo(
  ({ children, title = 'This is the default title' }) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
)

export default Layout
