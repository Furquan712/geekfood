import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RestaurantCard from '../components/restaurant/RestaurantCard'

const Resturant = () => {
  return (
     <>
      <Navbar />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
     </>
  )
}

export default Resturant