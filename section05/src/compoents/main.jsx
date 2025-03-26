/*
  {}
  자바스크립트 표현식만 사용가능(값만 가능, if/for문 같은 문법은 사용 불가)
  숫자, 문자열, 배열 값만 렌더링된다
*/
import "./Main.css"

const Main = () => {
  const user = {
    name : "차은우",
    isLogin : false,
  }

    {/* {user.isLogin === true ? "로그인":"로그아웃"} */}
    if(user.isLogin){
      return <div style={
        {backgroundColor : "red",
          border: "1px solid",
        }
      }>로그인</div>
    }else{
      return <div className="logout">로그아웃</div>
    }

}

export default Main;