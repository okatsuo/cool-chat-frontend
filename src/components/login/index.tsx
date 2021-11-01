import Router from 'next/router'
import { client } from '../../graphql/main'
import { USER_LOGIN } from '../../graphql/queries/login'
import { setUserToken } from '../../utils/authentication'

export const Login = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const { data } = await client.query({
        query: USER_LOGIN,
        variables: {
          fields: {
            email: e.target.email.value,
            password: e.target.password.value
          }
        }
      })
      setUserToken(data)
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">LOGAR</button>
      </form>
    </div>)
}