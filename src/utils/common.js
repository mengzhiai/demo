/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 10:18:42
 * @LastEditTime: 2019-09-05 10:54:51
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





const digitsRE = /(\d{3})(?=\d)/g
export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}