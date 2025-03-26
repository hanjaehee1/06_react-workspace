//매개변수를 구조분해할당으로 받을 수 있다
const Button = ({children, text, color = "black"}) => {
  //클릭이벤트
  const onclickEvent = (e) => {
    console.log("adsadsa");
    console.log(e);
  }

  return (
    <button 
      onClick={onclickEvent} 
      style={{color:color, width: "100px"}}>
        {text} - {color.toUpperCase()} {children}
    </button>
  )
}
export default Button;