import React from 'react';
import { FaStar, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';

const RestaurantCard = () => {
  const restaurantData = {
    URL: "http://www.just-eat.co.uk/restaurants-cn-chinese-cardiff/menu",
    address: "228 City Road",
    addressLine2: "Cardiff",
    name: ".CN Chinese",
    outcode: "CF24",
    postcode: "3JH",
    rating: 5,
    type_of_food: "Chinese"
  };

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md bg-white mt-24">
      {/* Front of the Card */}
     
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <h2 className="text-gray-800 font-semibold text-xl">{restaurantData.name}</h2>
          <div className="ml-2 flex">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={`w-5 h-5 ${index < restaurantData.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2"><FaMapMarkerAlt className="inline mr-1" /> {restaurantData.address}, {restaurantData.addressLine2}</p>
        <p className="text-gray-600 text-sm mb-4">{restaurantData.outcode} {restaurantData.postcode}</p>
      </div>

      {/* Back of the Card */}
      <div className="px-6 py-4 bg-gray-100">
        <div className="mb-2 text-green-500">
          <FaUtensils className="inline mr-1" />
          {restaurantData.type_of_food}
        </div>
        <a href={restaurantData.URL} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Visit Menu</a>
      </div>
    </div>
  );
};

export default RestaurantCard;
