import Router from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authentication'
import { client } from '../../graphql/main'
import { USER_LOGIN } from '../../graphql/queries/login'
import { setUserToken } from '../../utils/authentication'

export const Login = () => {
  const { signIn } = useContext(AuthContext)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    signIn({
      email: e.target.email.value,
      password: e.target.password.value
    })
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