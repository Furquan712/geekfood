import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RestaurantCardList from '../components/restaurant/RestaurantCardList'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Resturant = () => {
  return (
     <>
      <Navbar />
      <div className='mt-8'>
      <RestaurantCardList />
      </div>
     </>
  )
}

export default Resturant