// 1. 상수 객체
const animal = {
    type:"고양이",
    name:"나비",
    color:"black",

}

// animal = 123; const 상수는 재할당 절대 불가.

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
console.log(animal);

// 2. 메소드 속성
// => 속성의 값이 함수인 프로퍼티를 말한다.

const person = {
    name : "차은우",
    sayHi() {
        console.log("은우가 인사함");
    }
}

person.sayHi(); // 메소드속성이라 부르며 person 함수안에
// .sayHi를 통해 중첩함수 값을 불러온다.