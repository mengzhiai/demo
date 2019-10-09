/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 11:18:24
 * @LastEditTime: 2019-10-09 13:32:57
 * @LastEditors: Please set LastEditors
 */
  
export function getLocalStorage(key ) {
  return JSON.parse(window.localStorage.getItem(key) || null)
} 

export function setLocalStorage(key,data) {

  return window.localStorage.setItem(key,JSON.stringify(data))
}

export function removeLocalStorage(key) {
  return window.localStorage.removeItem(key)
}
