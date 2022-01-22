import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
      {/* <button
        className="filter-btn"
        onClick={() => {
          filterItems("all");
        }}
      >
        All
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          filterItems("breakfast");
        }}
      >
        Breakfast
      </button> */}
    </div>
  );
};

export default Categories;
