import React from 'react'
import "./home.css"
import Carousel from '../../components/carousel/Carousel'
import HomeProduct from '../product/HomeProduct'
import Faqs from '../faqs/Faqs'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <div>
           <Carousel/> 
           <HomeProduct/>
           <Faqs/>
           <Footer/>
        </div>
    </div>
  )
}

export default Home
