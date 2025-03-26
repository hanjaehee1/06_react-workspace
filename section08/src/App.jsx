import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

function App() {

  const mockData = [ // 예시 데이터
    {
      id : 0,
      isDone : false,
      content : "React 공부하기",
      date : new Date().getTime(),
    },
    {
      id : 1,
      isDone : false,
      content : "친구랑놀기",
      date : new Date().getTime(),
    },
    {
      id : 2,
      isDone : false,
      content : "빨래",
      date : new Date().getTime(),
    },
  ];

  const [todos, setTodos] = useState(mockData); // 할일이 여러개니까 배열로.
  const idRef = useRef(3) //current


  const onCreate = (content) => {

    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date:new Date().getTime(),
    }

    // 배열에 요소를 추가하겠다 => push, 가능할까?
    // todos.push(newTodo); // 불가능하다.
    // useState는 절대로 push를 사용하는 게 아니다.
    setTodos([newTodo, ...todos]); // 스프레드 함수, 하나의 배열로 된다.
  }

  const onUpdate = (targetId)=>{ //Id 속성의 값을 줌

    // todos state 값중에
    // targetId와 일치하는 id를 갖는 todoItem의 isDone 변경
    
    // setTodos(인수)
    // 인수 : targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열을 줘야함.

    // 찾아야 하니까 map를 사용한다

    setTodos(todos.map((todo)=>{
      if(todo.id === targetId){
        return { // 배열을 수정하겠다.
          ...todo, // todo배열을 스프레드로 뿌리기
          isDone : !todo.isDone // isDone 속성을 반대로 바꾸기
        }
      }
      // else는 return을 만나면 어차피 못간다
      return todo;
    }))
  }

  const onDelete = (targetId)=>{
    
      setTodos(todos.filter((todo)=>{
        return todo.id !== targetId
      }))
    
    
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
