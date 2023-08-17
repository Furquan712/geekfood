import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import QuoteCardList from '../components/quotes/QuoteCardList'

const Quote = () => {
  return (
     <>
     <Navbar />
      <QuoteCardList />
     <Footer />
     </>
  )
}

export default Quote