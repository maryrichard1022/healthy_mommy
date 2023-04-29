import React from "react";
import FilterButton from "./FilterButton";
// 컴포넌트 가져와서 쓸 때 import 해야 함!!

//물품 리스트 페이지에 필터..?인가?
// 페이지별로 카테고리 써야할듯?

const AllFilterButton = () => {
  return (
    <div className="AllFilterButton">
      <FilterButton text={"영양제"} />
      <FilterButton text={"운동복"} />
      <FilterButton text={"운동기구"} />
    </div>
  );
};

export default AllFilterButton;
