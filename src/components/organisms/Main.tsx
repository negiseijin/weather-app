import React from 'react'

type Props = {
  children: React.ReactNode
}

const Main: React.VFC<Props> = React.memo(({ children }) => (
  <main className="container mx-auto">{children}</main>
))

export default Main
