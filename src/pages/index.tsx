import { NextPage } from 'next'

import Search from '@/components/molecules/Search'
import Layout from '@/components/templates/Layout'

const IndexPage: NextPage = () => (
  <Layout title="Home | Weather app">
    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      Hello Weather 👋
    </h1>
    <Search />
  </Layout>
)

export default IndexPage
