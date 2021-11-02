import type { NextPage } from 'next'
import { useContext } from 'react'
import { Login } from '../components/login'
import { AuthContext } from '../contexts/authentication'
import HomePageTemplate from '../template/home-page-template'

const Home: NextPage = (props) => {
  const { loggedUser } = useContext(AuthContext)
  return loggedUser ? <HomePageTemplate /> : <Login />
}

export default Home
