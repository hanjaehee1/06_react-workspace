import React from "react";

const List = ({ users, onDelete }) => {
  return (
    <div>
      <h2>친구 리스트</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>사는 곳</th>
            <th>생일</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index}</td> {/* 0부터 시작하는 번호 유지 */}
              <td>{user.name}</td>
              <td>{user.location}</td>
              <td>{user.birthday ? new Date(user.birthday).toLocaleDateString("ko-KR") : ""}</td>
              <td>
                <button onClick={() => onDelete(index)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
