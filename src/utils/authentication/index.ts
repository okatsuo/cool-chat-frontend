import Router from 'next/router'

export const setUserToken = (data: string) => {
  localStorage.setItem('user_token', JSON.stringify(data))
}

export const getUserToken = (): string => {
  const user_token = localStorage.getItem('user_token')
  if(!user_token) return ''
  return JSON.parse(user_token).login
}

export const userHasToken = () => {
  const user_token = localStorage.getItem('user_token')
  if(!user_token) return false
  return true
}

export const userLogout = async () => {
  localStorage.removeItem('user_token')
  await Router.push('/')
}