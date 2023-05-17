//필터 버튼 (메인페이지에서 대표 상품 띄울 때)
import React from "react";
import "./FilterButton.css";

// 버튼 색 고민중...
const FilterButton = ({ text, onClick, isActive }) => {

  const buttonStyle = {
    fontWeight: isActive ? 'bold' : 'normal'
  };

  return (
    <button className="FilterButton" onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default FilterButton;
