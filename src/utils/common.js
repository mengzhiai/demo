/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 10:18:42
 * @LastEditTime: 2019-10-17 17:18:59
 * @LastEditors: Please set LastEditors
 */
export function postMoney(money){
  if(typeof(money) == "string"){
    console.log('string');
    return parseFloat((money.replace(/\,/g, "") * 100).toPrecision(12))
  }else{
    console.log('number');
    return parseFloat((money*100).toPrecision(12))
  }
}


//转金额显示,','分隔
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
  return `${year}${contact}${month}${contact}${day}`
}

export function formatDateTime(now,contact='/'){
  let currentDate = new Date(now);
  let year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2,'0');
  let day = currentDate.getDate().toString().padStart(2,'0');
  let hours = currentDate.getHours().toString().padStart(2,'0');
  let min = currentDate.getMinutes().toString().padStart(2,'0');
  return `${year}${contact}${month}${contact}${day} ${hours}:${min}`
}

export function toPhone(str) {

  if (isBlank(str)) {
      return "";
  }

  str = trim(str);

  var result = '';

  for (var i = 0; i < str.length; i++) {
      if (i == 3 || i == 7) {
          result += " ";
      }
      result += str[i];
  }
  return result;
}


//div局部打印
export function printArea(areaId) {
  let areaDiv = document.getElementById(areaId);
  let newContent = areaDiv.innerHTML;
  let oldContent = document.body.innerHTML;
  document.body.innerHTML = newContent;
  window.print();
  window.location.reload();
  document.body.innerHTML = oldContent;
}


//将金额转化为中文大写
export function moneyUpper(str) {
  var num = parseInt(str);
  var strOutput = "",
      strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
  num += "00";
  var intPos = num.indexOf('.');
  if (intPos >= 0) {
      num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (var i = 0; i < num.length; i++) {
      strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
  }
  return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元")
}


export function moneyNum(money){
  return parseFloat((money*100).toPrecision(12))
}

export function uniqueArr(arr){
  return Array.from(new Set(arr))
}