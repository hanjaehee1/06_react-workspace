import { useState } from "react";
import useInput from "react";

// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 컴포넌트 내부에서만 호출 가능
// 2. 조건부로 호출 될 수 없다.



const HookExam = () => {

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange}/>
            <input value={input2} onChange={onChange2}/>
            {input}
        </div>
    )
}

export default HookExam;