import React from "react";
import FilterButton from "./FilterButton";

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
