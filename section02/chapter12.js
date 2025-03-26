function task(){
    setTimeout(()=>{
        console.log("으흐흐일루와잇")
    }, 3000)
}

// task();

function add(a, b, callback){ // 매개변수로 1,2 인자를 받는다.
    setTimeout(()=>{
        const sum = a + b;
        callback(sum);
    }, 3000)
}

add(1,2, (value)=>{ // 인자를 넘겨주고 다시 매개변수로 받아온다.(콜백함수)
    // console.log(value);
}); // 인자로 넘긴다

// // 음식을 주문하는 상황
// function order(callback){
//     setTimeout(()=> {
//         const food = "떡볶이";
//         callback(food); // 인자로 넘김
//     }, 3000)
// }

// // 음식을 식히는 시간 함수
// function ice(food, callback){
//     setTimeout(()=>{
//         const icefood = '식은${food}';
//         callback(icefood);
//     }, 2000)
// }

// // 음식을 냉동시키는 함수
// function freez(food, callback){
//     setTimeout(()=>{
//         const freezFood = '${food}가 냉동되었습니다.';
//         callback(freezFood);
//     }, 1500)
// }

// order((food)=>{ // 매개변수로 받음
//    console.log(food);
   
//    ice(food,(icefood)=>{
//     console.log(icefood)

//     freez(icefood, (freezFood)=>{
//         console.log(freezFood)
//     })
//    })
// });

// 음식을 주문하는 함수
function order(callback){
    setTimeout(()=>{
        const food = "마라탕";
        callback(food);
    }, 3000)
}

// 음식을 식히는 함수
function cool(food, callback){
    setTimeout(() => {
        const coolFood = `식은${food}`;
        callback(coolFood);
    }, 2000);
}

// 음식을 냉동하는 함수
function ice(food, callback){
    setTimeout(()=>{
        const iceFood = `${food}이 냉동되었습니다.`;
        callback(iceFood);
    }, 1500)
}

order((food)=>{
    console.log(food)

    cool(food, (coolFood)=>{
        console.log(coolFood)

        ice(coolFood, (iceFood)=>{
            console.log(iceFood)
        })
    });
})

// 인덴트가 점점 깊어질 수 있음..! 기능이 늘어날수록!
// 이런걸 콜백지옥이라고 부른다
// 콜백지옥을 피하기위해 promise 라는걸 사용하면됨