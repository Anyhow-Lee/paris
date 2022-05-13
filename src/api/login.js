import request from '@/utils/request'
import Qs from 'qs'

const userApi = {
  Login: '/auth/oauth/token',
  Logout: '/auth/oauth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/sys/user/info',
  UserMenu: '/sys/menu/nav',
  buttonPermissions: '/sys/menu/permissions',
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    data: Qs.stringify(parameter),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic d21zaW86d21zaW8=',
    },
  })
}

export function getSmsCaptcha(parameter) {
  return request({
    url: userApi.SendSms,
    method: 'post',
    data: parameter,
  })
}

export function getInfo() {
  return request({
    url: userApi.UserInfo,
    method: 'get',
  })
}

export function getCurrentUserNav() {
  return request({
    url: userApi.UserMenu,
    method: 'get',
  })
}

export function logout() {
  return request({
    url: userApi.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
}

export function getButtonPermissions() {
  return request({
    url: userApi.buttonPermissions,
    method: 'get',
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step(parameter) {
  return request({
    url: userApi.twoStepCode,
    method: 'post',
    data: parameter,
  })
}
