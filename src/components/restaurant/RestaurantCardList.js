import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import jsonData from '../../constants/restaurant.json';

const RestaurantCardList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setminRating ] = useState(0);

  const handleRatingChange = (event) => {
    setminRating(+ event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value)
  };

  const filteredRestaurants = jsonData.restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) && restaurant.rating >= minRating
  );

  // Number of items per page and number of visible page links
  const itemsPerPage = 24;
  const visiblePageLinks = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of visible page links
  const startPage =
    currentPage <= Math.floor(visiblePageLinks / 2)
      ? 1
      : currentPage - Math.floor(visiblePageLinks / 2);

  const endPage =
    startPage + visiblePageLinks - 1 > totalPages
      ? totalPages
      : startPage + visiblePageLinks - 1;

  const visiblePageRange = Array.from({ length: endPage - startPage + 1 }).map(
    (_, index) => startPage + index
  );

  // Calculate the index range of visible restaurants
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  return (
    <div className='mx-8'>
       <div className="flex justify-between items-center mb-4">
      <div className="mb-4 mt-24 mx-8">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded p-2"
        />
      </div>
      <div className="mb-4 mt-24 mx-8">
        <label htmlFor="minRating" className="mr-2">
          Minimum Rating:
        </label>
        <input
          type="number"
          id="minRating"
          min={0}
          max={5}
          step={1}
          value={minRating}
          onChange={handleRatingChange}
          className="border rounded p-2"
        />
      </div>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {visibleRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <RestaurantCard restaurantData={restaurant} />
          </div>
        ))}
      </div>
      <div className='my-8'>
      <ol className="flex justify-center gap-1 text-xs font-medium mt-4">
      <li>
        <a
          href="#"
          className={`inline-flex h-8 w-8 items-center justify-center rounded border ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400'
              : 'bg-white text-gray-900'
          } rtl:rotate-180`}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
      {visiblePageRange.map((page) => (
        <li key={page}>
          <a
            href="#"
            className={`block h-8 w-8 rounded border ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-900'
            } text-center leading-8`}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(page);
            }}
          >
            {page}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          className={`inline-flex h-8 w-8 items-center justify-center rounded border ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400'
              : 'bg-white text-gray-900'
          }`}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
      </div>
    </div>
  );
};

export default RestaurantCardList;
