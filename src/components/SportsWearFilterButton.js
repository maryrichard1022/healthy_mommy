import React from "react";
import FilterButton from "./FilterButton";

const AllFilterButton = () => {
  return (
    <div className="AllFilterButton">
      <p><span style={{fontSize: '22px', fontWeight: 'bold'}}>
      <FilterButton text={"전체"} />
      <FilterButton text={"상의"} />
      <FilterButton text={"하의"} />
      </span></p>
    </div>
  );
};

export default AllFilterButton;
