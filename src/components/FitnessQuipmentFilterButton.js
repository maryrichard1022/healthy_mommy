import React from "react";
import FilterButton from "./FilterButton";

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
