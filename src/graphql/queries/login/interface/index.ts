import { UserProfileInterface } from '../../user-profile/interface';

export interface UserLoginInterface {
  login: {
    token: string,
    user: UserProfileInterface
  }
}