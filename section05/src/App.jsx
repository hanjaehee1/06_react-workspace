import './App.css'
import Header from './compoents/Header'
import Main from './compoents/main'
import Footer from './compoents/Footer'
import Button from './compoents/Button'
import './App.css'
import { useState } from 'react'
import Bulb from './compoents/Bulb'
import Counter from './compoents/Counter'
import Register from './compoents/Register'
import HookExam from './hook/HookExam'

// 리액트에서 화면이 리렌더링 되는 경우는 3가지가 있다.
// 1. 자신이 관리하는 state 의 값이 변경됐을 때
// 2. 제공 받는 props의 값이 변경 될 때
// 3. 부모 컴포넌트가 리렌더링 되면 자식 요소들 모두 리렌더링 된다

function App(){
  
}




function App(){

  
  const [light, setLight] = userState("OFF");
  // let light = "OFF"; // 실제로 값이 바뀐건 맞으나, 리렌더링이 안됨

  return(
    <>
        <Bulb/>
        <Counter/>
    </>
  )
}

function App() {
  const buttonProps = {
    text : "배열",
    color : "red",
    a : 1,
    b : 2,
    c : 3,
  }
  
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <br/>
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식</div>
        <Header/>
      </Button>
    </>
  )
}

export default App
