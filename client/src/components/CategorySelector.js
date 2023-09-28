import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const CategorySelector = () => {
  const [query, setQuery] = useState('')
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?page=1&query=${query}`)
  };

  return (
    <div className="mt-4 flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a category"
          className="border rounded-md p-2 mr-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default CategorySelector;
