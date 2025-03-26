// 5가지의 요소 순회 및 탐색 메소드
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메소드

let arr1 = [1,2,3];

arr1.forEach(function(item, idx, arr){ // 이거 콜백함수임
    // console.log(idx, item * 2)
})

let doubledArr = [];
arr1.forEach((item)=>{
    doubledArr.push(item * 2);
})

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메소드
let arr2 = [1,2,3];
let isInclude = arr2.includes(1);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메소드
let arr3 = [1,2,3];
let index = arr3.indexOf(30);// 존재할 시 인덱스 밸류값 호출
                             // 존재안하면 -1 표시

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메소드

let arr4 = [1,2,3];
const findIndex = arr4.findIndex((item)=>{
    if(item % 2 === 0) //모듈러 연산
    return true;
})

// indexOf 를 사용해도 차이없는데 그냥 사용하면안될까 하면?

let ObjectArr = [
    {name : "차은우"},
    {name : "주지훈"}
];

const objIndex = ObjectArr.indexOf({name : "차은우"});

// indexOf 는 얕은 비교로 하기 때문에 주소값은 잘 찾아도 데이터값은 잘 못찾음
// 객체를 찾을 때는 findIndex 를 사용해 콜백함수를 사용하여 구함

const objindex2 = ObjectArr.findIndex((item)=>{
    if(item.name === "차은우"){
        return true;
    };
})

// 단순 원시 타입 indexOf
// 복잡한 객체 타입은 findIndex

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환

let arr5 = [
    {name : "은우"},
    {name : "지훈"},
    {name : "장첸"},
]

const find = arr5.find((item)=>{
    if(item.name === "지훈"){
        return true;
    }
})

console.log(find)