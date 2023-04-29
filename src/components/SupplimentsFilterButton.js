import React from "react";
import FilterButton from "./FilterButton";
// 컴포넌트 가져와서 쓸 때 import 해야 함!!

//물품 리스트 페이지에 필터..?인가?
// 페이지별로 카테고리 써야할듯?

const AllFilterButton = () => {
  return (
    <div className="AllFilterButton">
      <FilterButton text={"엽산"} />
      <FilterButton text={"칼슘"} />
      <FilterButton text={"철분"} />
      <FilterButton text={"유산균"} />
      <FilterButton text={"비타민D"} />
    </div>
  );
};

export default AllFilterButton;
