export interface UserLoginInterface {
  login: {
    token: string,
    user: {
      id: number
      name: string
      email: string
      created_at: Date
      updated_at: Date
    }
  }
}