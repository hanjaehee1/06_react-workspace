import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BirthdayPicker = ({ onSelectDate }) => {
  const [birthday, setBirthday] = useState(null);

  const handleDateChange = (date) => {
    setBirthday(date);
    onSelectDate(date);  // 부모 컴포넌트(Register)로 선택한 날짜 전달
  };

  return (
    <div>
      <h4>생일을 선택하세요:</h4>
      <DatePicker
        selected={birthday}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
      />
    </div>
  );
};

export default BirthdayPicker;
