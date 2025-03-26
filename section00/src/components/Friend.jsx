import React from "react";

const Friend = ({ users }) => {
  return (
    <div>
      <h2>친구 리스트</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.birthday?.toISOString().split("T")[0]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Friend;
