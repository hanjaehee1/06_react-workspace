import React, { useState } from "react";
import BirthdayPicker from "./BirthdayPicker";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [location, setLocation] = useState(""); // 사는 곳 상태 추가

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !birthday || !location) {
      alert("모든 정보를 입력해주세요!");
      return;
    }
    onRegister({ name, birthday, location }); // App.js로 값 전달
    setName("");
    setBirthday(null);
    setLocation("");
  };

  return (
    <div>
      <h2>내 친구를 소개합니다</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* 생일 선택 */}
        <BirthdayPicker onSelectDate={setBirthday} />

        {/* 사는 곳 선택 */}
        <div>
          <label>사는 곳:</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)} required>
            <option value="">-- 선택하세요 --</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="인천">인천</option>

          </select>
        </div>

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default Register;
