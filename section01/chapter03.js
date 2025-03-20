// 1. Number 타입
let num1 = 20;
let num2 = 1.5;
let num3 = -20;

console.log(num1 % num2); // 모듈러 연산이라고 부른다

let inf = Infinity;
let mInf = -Infinity;

console.log(mInf);

let nan = NaN;
console.log("ㅎㅇ" % num2); // 숫자와 문자열이 만나서 숫자가아니게됨. NaN
// 숫자가 아니다라는 뜻.

// 2. String 타입
let myName = "은우";
let myLocation = "생선님맘속";

let introduce = myName + myLocation;
// console.log(introduce);

let introduceText = `${myName}는 ${myLocation}에 거주합니다.`;
console.log(introduceText);
// 템플릿 리터럴 문법 이라고 부름 택틱(``)을 사용

// 3. boolean 타입
let isTrue = true;
let isFalse = false;

// 4. Null 타입 (아무것도 없다.)
let empty = null;

// 5. Undefined
let und;
console.log(und);
// Null과는 다르게 Null 은 Null값이 부여되어야 하지만
// Undefined 는 진짜 아무관심안줘서 값도 변수도 안들어가있는 것.

