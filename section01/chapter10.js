// 1. 함수표현식으로 함수 생성
function funcA(){
    // console.log("funcA");
    
}

let varA = funcA;

varA();
funcA();

// 2. 익명함수로 함수 생성

// varB(); 익명함수로 함수를 만들면 호이스팅이 되지않음

let varB = function(){
    console.log("funcB");
}

varB();

// 3. 화살표 함수 return 과 function{} 생략가능 () 는 값을 담는공간이므로 필요
let varC = (value) => value + 1;

console.log(varC(10));

