import xRequest from '@/service'

import { IAccount, ILoginResult, IUserInfo } from './types'
import { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' // 用法: role/{index}/menu
}

export const accountLoginRequest = (account: IAccount) => {
  return xRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export const requestUserInfoById = (id: number) => {
  return xRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export const requestUserMenuByRoleId = (id: number) => {
  return xRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
