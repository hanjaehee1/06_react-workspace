import './App.css'
import Viewer from './compoents/Viewer'
import Controller from './compoents/Controller'
import { useState, useEffect, useRef } from 'react'
import Even from './compoents/Even'

function App() {
  const[count,setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  const isMount = useRef(false);
  //useEffect
  //(콜백함수, 배열)
  //이때 배열 => 의존성 배열(deps)라고 부르고, 해당 배열의 값이 변화하면 콜백함수 실행, 비워두면 페이지 생성 시 실행
  const [input,setInput] = useState("");
  
  useEffect(() => {
    // console.log(`count : ${count}`)
  }, [count,input]);

  //* 라이프 사이클
  //1. Mount : 탄생
  useEffect(() => {
    console.log("Mount");
  }, []);
  //2. Update : 변화, 리랜더링
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return
    }
    console.log("Update")
  });
  

  //사용 예시)
  //리액트의 컴포넌트가 마운트 : 데이터를 조회하라는 코드 작성
  //리액트가 리랜터링 되면 : 수정된 데이터가 유효한지 검사하는 코드 작성
  //리액트가 언마운트 되면 : 메모리를 싹 비우는 코드 작성

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" onChange={(e) => {
          setInput(e.target.value);
          
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 == 0 ? <Even/>:null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
