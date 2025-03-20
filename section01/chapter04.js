// 1. 묵시적 형변환
// 시키지도 않았는데 알아서 되는거.
// 누가? 브라우저 내장객체 자바스크립트 엔진이 해줌

let num = 10;
let str = "20";

const result = num + str;
console.log(result)

// 2. 명시적 형변환(강제 형변환)
// 자동으로 안돼서 우리가 직접하는 형변환
// 문자열 => 숫자
let str1 = "10";
let strToNum1 = Number(str1); // Number 는 숫자만 있어야함
console.log(strToNum1)

let str2 = "10개";
let strToNum2 = parseInt(str2); // 앞에 숫자로 시작해야됨
console.log(strToNum2);
// parseDouble 도 있음 소수점 찍을때 용이
// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1);
