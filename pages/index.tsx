import { useQuery, useSubscription } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NEW_MESSAGE } from '../src/graphql/subscriptions/message'

const Home: NextPage = () => {
  const { data, loading, error } = useSubscription(NEW_MESSAGE)
  if (loading) return <p>Loading...</p>
  console.log(data)
  console.log(error)
  return (
      <Head>
        <title>Cool-Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default Home
