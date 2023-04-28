import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-container">
      <h1>404 error</h1>
      <h4>찾을 수 없는 페이지입니다.</h4>
      <Link to="/">홈으로 돌아가기</Link>
    </main>
  );
}

export default NotFound;
