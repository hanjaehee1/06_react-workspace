// Promise

const promise = new Promise((resolve, reject)=>{
    // resolve : 프로미스의 상태를 성공으로 바꿔주는 함수
    // reject : 프로미스의 상태를 실패로 바꿔주는 함수
    
    // 비동기 작업 실행하는 함수
    // executor
    
    // setTimeout(()=>{
    //         console.log("안녕")
    //         // resolve("야하롱"); fullfilled 성공 상태로 바꿔준다
    //         reject("실패"); // rejected 실패 상태로 바꿔준다.
    //     }, 2000);
        
    //     setTimeout(()=>{
    //         console.log(promise);
    //     }, 3000);
    });
    
function add10(num){
        
    const promise = new Promise((resolve, reject)=>{
            
        setTimeout(()=>{
                
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject("num이 숫자가 아닙니다");
            }
                
        }, 2000)
            
    });
        
    return promise;
}
    
// add10(0).then((result)=>{
//     console.log(result);
//     return add10(result);
// }).then((result)=>{
//     console.log(result);
//     return add10(result);
// }).then((result)=>{
//     console.log(result);
//     return add10(undefined);
// }).catch((error)=>{
//     console.log(error);
// })

// 음식주문 2탄 promise 사용
function order(){

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const food = "마라탕";
            resolve(food);
        }, 3000)
    });

    return promise;

}

// 음식을 식히는 함수 2탄
function cool(food){

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const coolFood = `식은 ${food}`;
            resolve(coolFood);
        }, 2000);
    });

    return promise;

}

function freez(food){

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const freezFood = `${food}이 냉동되었습니다.`;
            resolve(freezFood);
        }, 1500);
    });

    return promise;

}

order().then((food)=>{
    console.log(food)
    return cool(food)
}).then((coolFood)=>{
    console.log(coolFood)
    return freez(coolFood)
}).then((freezFood)=>{
    console.log(freezFood);
})