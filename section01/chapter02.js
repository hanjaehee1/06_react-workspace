// 1. 변수 선언
let age = 20;
console.log(age);

// 재할당
age = 30;

// 2. 상수
const birth = "1999.01.01";
// birth = "2005.01.01"; 상수는 재할당 불가 중복안된다는뜻
console.log(birth);

// 3. 변수 명명 규칙(네이밍 규칙)
// 3_1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;
console.log("$_name");

// 3_2. 숫자로 시작할 수 없다.
let name1;
// let 2name; 숫자로 시작안되서 에러뜸

// 3_3. 예약어 안된다.
// let if; let 자료형에 if for while 등 처리안된다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 2;
let total = salesCount + refundCount;
console.log(total);
// 변수 명명시 의미없이 하지 말기 let a let b let c 등