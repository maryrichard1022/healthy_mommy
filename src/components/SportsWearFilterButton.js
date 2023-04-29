import React from "react";
import FilterButton from "./FilterButton";

const AllFilterButton = () => {
  return (
    <div className="AllFilterButton">
      <FilterButton text={"상의"} />
      <FilterButton text={"하의"} />
    </div>
  );
};

export default AllFilterButton;
