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
     
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <RestaurantCard restaurantData={restaurant} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default RestaurantCardList;
