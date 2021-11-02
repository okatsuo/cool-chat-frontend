import type { NextPage } from 'next'
import { Login } from '../components/login'
import HomePageTemplate from '../template/home-page-template'
import { userHasToken } from '../utils/authentication'

const Home: NextPage = (props) => {
  const authenticated = userHasToken()
  return authenticated ? <HomePageTemplate /> : <Login />
}

export default Home
