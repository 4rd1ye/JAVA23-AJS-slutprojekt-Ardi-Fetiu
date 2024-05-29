import React, { useState } from 'react';

const FilterTasks = ({ filterTasks }) => {
  // State to hold the selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Function to handle change in category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    filterTasks(selectedCategory);
  };

  // Return a form with a label, a dropdown menu, and a search button
  return (
    <form className="form-inline">
      <div className="form-group mr-2">
        <label htmlFor="categoryFilter" className="mr-2">Filter</label>
        <select
          id="categoryFilter"
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ marginLeft: '8px' }} // Add space between label and dropdown
        >
          <option value="all">Show All</option>
          <option value="ux">UX</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSearchClick}>
        Search
      </button>
    </form>
  );
};

export default FilterTasks;
