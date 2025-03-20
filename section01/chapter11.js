// 1. 콜백함수

function main(value){ // 매개변수
    value();
}

function sub(){
    console.log("나 서브야");
}

// main(sub); // 인자 => 이게 콜백함수

main(() => {
    console.log("나도 서브야");
});

// 2. 콜백함수의 활용
// function repeat(count){
//     for(let idx = 1; idx<= count; idx++){
//         console.log(idx);
//     }
// }

// repeat(7);

// function repeatDouble(count){
//     for(let idx = 1; idx<= count; idx++){
//         console.log(idx * 2);
//     }
// }

// repeatDouble(7);

// function repeatTriple(count){
//     for(let idx = 1; idx<= count; idx++){
//         console.log(idx * 3);
//     }
// }

// repeatTriple(7);

function repeat(count, callback){
    for(let idx = 1; idx<= count; idx++){
        callback(idx);
    }
}

repeat(5,(idx) => {
    console.log(idx);
});

repeat(5,(idx) => {
    console.log(idx * 3);
});