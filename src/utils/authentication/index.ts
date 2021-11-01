import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export const setUserToken = (data: string) => {
  localStorage.setItem('user_token', JSON.stringify(data))
}

export const userHasToken = () => {
  const user_token = localStorage.getItem('user_token')
  if(!user_token) return false
  return true
}

export const userLogout = () => {
  localStorage.removeItem('user_token')
}