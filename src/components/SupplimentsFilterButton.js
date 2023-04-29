import React from "react";
import FilterButton from "./FilterButton";

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
