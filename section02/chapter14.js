// async
// 함수앞에 붙이는 키워드
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드이다.

async function getData(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name : "차은우",
                id : "user01"
            })
        }, 1500)
    });

}

// await 
// async 함수 내부에서만 사용이 가능한 키워드

async function printData(){
    const data = await getData(); // await 을 쓰려면 꼭 async 에 포함된 함수안에서 사용가능
    console.log(data);
}

printData();