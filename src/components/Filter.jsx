import React from "react";


export default function Filter({onHandleChange}) {
  return (
    <>
      <div className="filter">
        <label for="filter">Filter: </label>

        <select name="filter_name" id="filter" onChange={onHandleChange}>
          <option value="default">Filter</option>
          <option value="name">Sort By Name</option>
          <option value="price">Sort By Price</option>
         
        </select>
      </div>
    </>
  );
}
