import { useSubscription } from '@apollo/client'
import { NEW_MESSAGE } from '../../graphql/subscriptions/message'

export const HomePageTemplate = () => {
  const { data, loading, error } = useSubscription(NEW_MESSAGE)
  if (loading) return <p>Loading...</p>
  console.log(data)
  console.log(error)
  return (
    <div>HOME PAGE!!!</div>
  )
}

export default HomePageTemplate