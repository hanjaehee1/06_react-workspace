import { useState } from "react";
import HookExam from "./HookExam";

function useInput(){ // use 라는 접두어를 붙이면 customHook 판정으로 훅으로 인식해준다.

    const [input, setInput] = useState("");
    
    const onChange = (e) => {
        setInput(e.target.value)
    }

    return [input, onChange];
}

export default HookExam;