/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 10:18:42
 * @LastEditTime: 2019-09-09 18:32:48
 * @LastEditors: Please set LastEditors
 */
export function postMoney(money){
  return parseFloat(money.replace(/\,/g, "") * 100)
}

export function toMoneyStr(num, fixedNum) {

  if (null == num || '' == num) {
      num = 0
  }

  if (null != fixedNum && fixedNum > 0) {
      num = num.toFixed(fixedNum);
  }
  num = parseFloat(num)
  num = num.toLocaleString();
  return num;
}

export function threeNumberAPointer(str) {
  return parseFloat(str).toFixed(2).replace(/\d(?=(?:\d{3})+\b)/g, `$&,`)
}

export function log(val){
  console.log(val);
}

export function formatDate(now,contact='-'){
  let currentDate = new Date(now);
  let year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2,'0');
  let day = (currentDate.getDate()).toString().padStart(2,'0');
  return year + contact + month + contact + day;
}

export function formatDateTime(now,contact='-'){
  let currentDate = new Date(now);
  let year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2,'0');
  let day = currentDate.getDate().toString().padStart(2,'0');
  let hours = currentDate.getHours().toString().padStart(2,'0');
  let min = currentDate.getMinutes().toString().padStart(2,'0');
  return year + contact + month + contact + day + ' ' + hours + ':' + min;
}

