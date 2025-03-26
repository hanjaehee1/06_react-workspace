import { useState } from "react";
import TodoItem from "./TodoItem";
import "./List.css";

const List=({todos, onUpdate, onDelete})=>{ // 객체로 받아야 한다.

  const [search, setSearch] = useState(""); // 빈문자로 해야 한다.

  const onChangeSearch = (e)=>{
    setSearch(e.target.value);
  }

  const getFilteredData = ()=>{
    if(search === ""){ // 검색을 하지 않음
      return todos;
    }
    // 배열.filter(()=>{}) 새로운 배열로 준다.
    return todos.filter((todo)=>{ // todo 매개변수
      // return todo.content.includes(search); // search 개체를 포함한 것
      return todo.content.toLowerCase().includes(search); // 소문자도 포함
    })
  }

  

  const filteredTodos = getFilteredData(); // 원래 배열 또는 검색된 배열;


  return(
    <div className="List">

      <h4>Todo List (●'◡'●)</h4>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {/* 맵함수를 써야 한다. */}
        {/* 배열.map((item)=>{}) */}
        {/* 이곳에 넣을 배열은 todos */}
        {/* {todos.map((todo)=>{ // 검색 배열로 바꾼다. */}
        {filteredTodos.map((todo)=>{ // 검색 배열로 바꾼다.
          return <TodoItem key={todo.id}{...todo} onUpdate={onUpdate} onDelete={onDelete}/>
        })}
      </div>
    </div>

  )

}

export default List;