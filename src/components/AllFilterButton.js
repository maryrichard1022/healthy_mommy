import React from "react";
import FilterButton from "./FilterButton";

const AllFilterButton = () => {
  return (
    <div className="AllFilterButton">
      <p><span style={{fontSize: '22px', fontWeight: 'bold'}}>
      <FilterButton text={"영양제"} />
      <FilterButton text={"운동복"} />
      <FilterButton text={"운동기구"} />
      </span></p>
    </div>
  );
};

export default AllFilterButton;
