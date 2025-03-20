// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null 이나 undefined 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // 앞에있는게 들어감

console.log(var4, var5, var6);

let userName = "차은우";
let userNickName = "얼굴천재";

let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = true;
let t1 = typeof(var7);
console.log(t1);

// 3. 삼항연산자
// 조건 ? 참 : 거짓
let result = 10 % 2 === 0 ? "짝수" : "홀수";
console.log(result)