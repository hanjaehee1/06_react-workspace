// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)

let arrC = [ // 숫자 문자 문자열 null undefined 화살표 함수 배열 객체 다넣을 수 있음
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    []
];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hi"

console.log(arrC);