//필터 버튼 (메인페이지에서 대표 상품 띄울 때)
import "./FilterButton.css";

const FilterButton = ({ text }) => {
  return <button className="FilterButton">{text}</button>;
};

export default FilterButton;
