import { useSubscription } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/authentication'
import { NEW_MESSAGE } from '../../graphql/subscriptions/message'
import { userLogout } from '../../utils/authentication'

export const HomePageTemplate = () => {
  const { data, loading, error } = useSubscription(NEW_MESSAGE)
  // TODO ainda não sei como montar na tela as novas informações
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <main style={{ maxWidth: '1200px', margin: 'auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>cool-chat</div>
        <div onClick={userLogout}>logout</div>
      </header>
    </main>
  )
}

export default HomePageTemplate