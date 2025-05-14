import React from 'react'
import "./merchandise.css"
import Footer from '../../components/footer/Footer'

function Merchandise() {

    const mug = ["/mug1.jpg", "/mug2.jpg", "/mug3.jpg", "/mug4.jpg"]
    const glass = ["/glass1.jpg", "/glass2.jpg", "/glass3.jpg", "/glass4.jpg"]
    const shirt = ["/shirt1.jpg", "/shirt2.jpg", "/shirt3.jpg", "/shirt4.jpg"]
    const glasses = ["/glasses1.jpg", "/glasses2.jpg", "/glasses3.jpg", "/glasses4.jpg"]
    const bag = ["/bag1.jpg", "/bag2.jpg", "/bag3.jpg", "/bag4.jpg"]
  return (
    <div>
        <div className='mug_container'>
            <h2>MUG</h2>
            <div className='mug_contain'>
                {mug.map((item) => (
                    <div key={item} className='mug'> 
                        <img src={item} alt="image" />
                    </div>
                ))}
            </div>
        </div>
        <div className='glass_container'>
            <h2>GLASS</h2>
            <div className='glass_contain'>
                {glass.map((item) => (
                    <div key={item} className='glass'> 
                        <img src={item} alt="image" />
                    </div>
                ))}
            </div>
        </div>
        <div className='shirt_container'>
            <h2>SHIRT</h2>
            <div className='shirt_contain'>
                {shirt.map((item) => (
                    <div key={item} className='shirt'> 
                        <img src={item} alt="image" />
                    </div>
                ))}
            </div>
        </div>
        <div className='glasses_container'>
            <h2>GLASSES</h2>
            <div className='glasses_contain'>
                {glasses.map((item) => (
                    <div key={item} className='glasses'> 
                        <img src={item} alt="image" />
                    </div>
                ))}
            </div>
        </div>
        <div className='bag_container'>
            <h2>BAGS</h2>
            <div className='bag_contain'>
                {bag.map((item) => (
                    <div key={item} className='bag'> 
                        <img src={item} alt="image" />
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Merchandise
