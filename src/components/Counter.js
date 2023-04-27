// 물품 갯수 몇개 살지 카운트

import React, { useState } from "react";
import "./Counter.css";
//기본 값 1에서 출발
//1씩 증가, 1씩 감소
// 1을 state로 생각

const Counter = () => {
  const [count, setCount] = useState(1);

  //증가 함수
  const onIncrease = () => {
    setCount(count + 1);
  };

  //감소 함수
  const onDecrease = () => {
    if (count >= 2) {
      setCount(count - 1);
    } else {
      alert("최소 주문 수량은 1개입니다.");
      setCount(count);
    }
  };
  return (
    <div className="Counter">
      <button className="IncreaseButton" onClick={onIncrease}>
        +
      </button>
      <div>{count}</div>
      <button className="DecreaseButton" onClick={onDecrease}>
        -
      </button>
    </div>
  );
};

export default Counter;
