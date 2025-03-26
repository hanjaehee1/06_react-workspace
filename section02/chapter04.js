// 1. Spread 연산자
// => Spread : 흩뿌리다, 펼치다 라는 뜻
// => 객체나 배열에 저장된 여러개의 값들을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5,6];
// console.log(arr2); 위험하고 귀찮음. 갑자기 값이 추가, 변경, 삭제된다하면?

let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let cookie = {
    makeDate : "20250321",
    maker : "siyeon",
    shop : "hclass"
};

let blueberryCookie = {
    ...cookie,
    topping : "blueberry",
};

// console.log(blueberryCookie);

function funcA(p1, p2, p3){
    // console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// Rest는 나머지, 나머지 매개변수

function funcB(one, ...rest /*, four 이건 안됨 */){ // rest 매개변수
    console.log(one, rest)
}

funcB(...arr1); // 스프레드 연산자