import { useSubscription } from '@apollo/client'
import { Layout } from '../../components/Layout'
import { NEW_MESSAGE } from '../../graphql/subscriptions/message'

export const HomePageTemplate = () => {
  const { data, loading, error } = useSubscription(NEW_MESSAGE)
  return (
    <Layout>
      bom dia!
    </Layout>
  )
}

export default HomePageTemplate