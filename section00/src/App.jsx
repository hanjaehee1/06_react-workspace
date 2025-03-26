import React, { useState } from "react";
import Register from "./components/Register";
import List from "./components/List";

function App() {
  // 기본 친구 목록 추가
  const [users, setUsers] = useState([
    { name: "차은우", location: "서울", birthday: new Date("1999-01-01") },
    { name: "주지훈", location: "인천", birthday: new Date("1999-01-02") },
    { name: "장원영", location: "부산", birthday: new Date("1999-01-03") },
  ]);

  const handleRegister = (user) => {
    setUsers([...users, user]); // 새 사용자 추가
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // 선택한 인덱스 제거
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Register onRegister={handleRegister} />
      <List users={users} onDelete={handleDelete} />
    </div>
  );
}

export default App;
