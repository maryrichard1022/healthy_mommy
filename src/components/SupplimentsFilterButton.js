import React from "react";
import FilterButton from "./FilterButton";

const AllFilterButton = () => {
  return (
    <div className="AllFilterButton">
      <p><span style={{fontSize: '22px', fontWeight: 'bold'}}>
      <FilterButton text={"전체"} />
      <FilterButton text={"엽산"} />
      <FilterButton text={"칼슘"} />
      <FilterButton text={"철분"} />
      <FilterButton text={"유산균"} />
      <FilterButton text={"비타민D"} />
      </span></p>
    </div>
  );
};

export default AllFilterButton;
