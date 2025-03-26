import { useState } from "react";


const Bulb = () =>{
    const [count, setState] = useState(0);
    // 첫번째 : state의 값, 두번째 : state 를 변경해주는 함수
  
    console.log(Light);
    return (
      <div>{Light === "ON"
        ? <h1 style={{backgroundColor : "orange"}}>ON</h1>
        : <h1 style={{backgroundColor : "gray"}}>OFF</h1>
      }
      <button onClick={()=>{
            setLight(light === "ON" ? "OFF" : "ON");
            // light = light === "ON" ? "OFF" : "ON"
          }}> // 3항연산자
            {light === "ON" ? "전구끄기" : "전구켜기"}
          </button>
      
      </div>
    )
}

export default Bulb 