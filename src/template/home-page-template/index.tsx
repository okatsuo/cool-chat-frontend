import { useSubscription } from '@apollo/client'
import { useEffect, useState } from 'react'
import { NEW_MESSAGE } from '../../graphql/subscriptions/message'
import { userLogout } from '../../utils/authentication'

export const HomePageTemplate = () => {
  const { data, loading, error } = useSubscription(NEW_MESSAGE) 
  // TODO ainda não sei como montar na tela as novas informações
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