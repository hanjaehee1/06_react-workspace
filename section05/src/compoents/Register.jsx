import { useRef, useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개


const Register = () =>{

    
    const countRef = useRef(0);
    const inputRef = useRef();
    console.log(countRef)

    // let count = 0;
    
    
    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : ""
    });

    // 이벤트 핸들러
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = ()=>{
        if(input.name === ""){
            // 이름을 입력하는 dom 요소 포커스
            inputRef.current.focus();
        }
    }

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // }

    // const onChangeBirth = (e) => {
    //     setBirth(e.target.value)
    // }

    // const onChangeCountry = (e) => {
    //     setCountry(e.target.value)
    // }

    // const onChangeBio = (e) => {
    //     setBio(e.target.value)
    // }

    return(

        <div>
            <button onClick={()=>{
                // count++;
                // console.log(count)
                countRef.current++;
                console.log(countRef.current);
            }}>ref + 1</button>
        
            <h1>환영합니다. 😊</h1>

            <div>
                <input ref={inputRef} name="name" value={input.name} placeholder="이름" onChange={onChange}/>
            </div>
            <div>
                <input name="birth" type="date" value={input.birth} onChange={onChange}/>
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value="x"></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="eu">영국</option>
                </select>
                {country}
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>
            </div>

        </div>
    )
}

export default Register;

// 리액트에서 사용자의 입력을 받는 방법
// 1. 값을 저장하기 위해 state 를 만든다.
// 2. 해당 요소가 변경될 때 마다 (onChange) state를 변경해주는 이벤트핸들러 만든다.
// 3. 해당 요소의 onChange 속성에 해당 이벤트 핸들러 연결해준다.
// 4. value도 잘 써준다
