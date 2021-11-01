import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Login } from '../src/components/login'
import { NEW_MESSAGE } from '../src/graphql/subscriptions/message'
import HomePageTemplate from '../src/template/home-page-template'
import { userHasToken } from '../src/utils/authentication'

const Home: NextPage = (props) => {
  const is_valid = userHasToken()
  return (
    is_valid ? <HomePageTemplate /> : <Login />
  )
}

export default Home
