import { useEffect } from "react";

const Even = () => {

  //3. UnMount
  useEffect(() => {
    //UnMount : 클린업, 정리 함수가 있어야 함
    return () => {
      console.log("UnMount");
    }
  }, []);

  return(
    <>
      <div>짝수</div>
    </>
  )
}
export default Even;