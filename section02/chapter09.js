// 5가지 배열 변형 메소드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환
// 이거 관리자페이지 검색기능에 넣을생각

let arr1 = [
    {name : "차은우", hobby : "얼굴"},
    {name : "주지훈", hobby : "연기"},
    {name : "박보검", hobby : "연기"},
]

// const actor = arr1.filter((item)=>{
//     if(item.hobby === "연기"){
//         return true;
//     }
// })

const actor = arr1.filter((item)=>{
    item.hobby === "연기" // 위 콜백함수 단축식
})

// 2. map ** 이거 중요하답니다.
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr)=> {
    // 특이하게 map 안에 있는 콜백함수에서는 return 을 쓸 수 있음
    return item * 2;
})

let names = arr1.map((item)=> item.name);

// 3. sort => 원본 배열에 영향을 끼치는 메소드
// 배열을 사전순으로 정렬하는 메소드

let arr3 = [10, 3, 5]; // 숫자는 안됨. 사전순이라서 숫자는 포함되지않음
arr3.sort((a, b)=>{
    if(a > b){
        // b가 a앞에 와라
        return 1; // 양수를 반환하면 됨
    }else if(b > a){
        // a가 b앞에 와라
        return -1; // 음수를 반환하면 됨
    }else{// a = b 인상황
        return 0; // 0을 반환하면 됨
    }
});

// 4. toSorted(가장 최근에 추가된 새로운 최신함수)
// 원본 배열을 훼손시키지 않고, 새로운 배열 반환
let arr5 = ["c", "b", "a"];
let sorted = arr5.toSorted();

console.log(sorted)
console.log(arr5)

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메소드
let arr6 = ["hi", "I am pretty"];
let join = arr6.join();
console.log(join);
