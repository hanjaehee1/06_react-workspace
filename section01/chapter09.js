// 함수 선언

function hi(){
    console.log("안녕");
}

console.log("호출 전")
hi();
console.log("호출 후")

let area = getArea(10, 30); // () 안에 변수에 들어갈 인자를 부여한다.
console.log(area);
getArea(30, 40);

// 자바스크립트는 호이스팅이 된다.
// 호이스팅 : 최상단으로 끌어올려서 실행해줌
function getArea(width, height){ // function에 매개변수 이름 부여
    
    function another(){ // 중첩함수
        console.log("어나더");
    }

    another()
    
    let area = width * height;
    return area;
}