import React from "react";
import FilterButton from "./FilterButton";
// 컴포넌트 가져와서 쓸 때 import 해야 함!!

//물품 리스트 페이지에 필터..?인가?
// 페이지별로 카테고리 써야할듯?

const AllFilterButton = () => {
  return (
    <div className="AllFilterButton">
      <FilterButton text={"실내사이클"} />
      <FilterButton text={"짐볼"} />
      <FilterButton text={"탄력밴드"} />
      <FilterButton text={"폼롤러"} />
      <FilterButton text={"요가매트"} />
    </div>
  );
};

export default AllFilterButton;
