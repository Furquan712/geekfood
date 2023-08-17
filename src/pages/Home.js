import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import Split from '../components/split/Split'
import Feedback from '../components/feedback/Feedback'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
     <>
     <Navbar />
     <Banner />
     <Split />
     <Feedback />
     <Footer />
     </>
  )
}

export default Home