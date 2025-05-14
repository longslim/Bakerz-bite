import React from 'react'
import "./about.css"
import Footer from '../../components/footer/Footer'

function About() {
  return (
    <div>
            <div className='about_container'>
                <div className='about_us'>
                    <h2>ABOUT US</h2>
                    <p>
                        At Bakerz Bite, we’re passionate about creating mouthwatering cakes and pastries that bring joy to every occasion. 
                        From classic butter cakes to flaky croissants, everything is made fresh with love and high-quality ingredients.
                    </p>
                    <p>
                        What started as a small kitchen dream has grown into a bakery known for taste, creativity, and care in every bite. 
                        Whether you're here for a quick treat or a custom cake, we’re here to make it special.
                    </p>
                    <p>
                        <strong>
                            Thanks for being part of our story!!!
                        </strong>
                    </p>
                </div>
                <div className='about_top'>
                    <p>
                        <strong>
                            We offer a variety of high-quality, fresh baked goods, including breads, pastries, cakes, and other treats, 
                            along with excellent customer service and potentially other services like delivery or custom orders. 
                        </strong>
                    </p>
                    <h2>What we do  </h2>
                    <p><strong>Custom Orders</strong></p>
                    <p><strong>Delivery</strong></p>
                    <p><strong>Loyalty Programs</strong></p>
                    <p><strong>Other Treats</strong></p>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default About
