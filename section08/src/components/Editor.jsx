import { useState, useRef } from "react";
import "./Editor.css";

const Editor=({onCreate})=>{

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangetContent = (e)=>{
    setContent(e.target.value);
  }

  // const onsubmit= ()=>{
  //   onCreate(content);
  // }

  const onsubmit = ()=>{
    if(content === ""){ // 아무것도 입력x
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  const onKeyDown = (e)=>{
    if(e.keyCode === 13){
      onsubmit();
    }

  }


  return(
    <div className="Editor">
      <input onKeyDown={onKeyDown} ref={contentRef} value={content} onChange={onChangetContent} placeholder="새로운 Todo..."/>
      <button onClick={onsubmit}>추가</button>
    </div>
  )
}

export default Editor;