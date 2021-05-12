import { NextPage } from 'next'

import WeatherForm from '@/components/organisms/WeatherForm'
import Layout from '@/components/templates/Layout'

const IndexPage: NextPage = () => (
  <Layout title="Home | Weather app">
    <section className="flex flex-col gap-6">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        Hello Weather 👋
      </h1>
      <WeatherForm />
    </section>
  </Layout>
)

export default IndexPage
