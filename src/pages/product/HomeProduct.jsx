import React from 'react'
import "./homeProduct.css"
import { useNavigate } from 'react-router-dom'


function HomeProduct() {

    const navigate = useNavigate()

    const handleButtonClick = (type) => {
        navigate(`/categories/product`, {state : {type}})
    }

    const items =[
        {
            image: "/cake.jpg",
            type: "cakes"
        },
        {
            image: "/pastries.jpg",
            type: "pastries"
        },
        {
            image: "/cookies.jpg",
            type: "cookies"
        },
        {
            image: "/pies.jpg",
            type: "pies"
        },
    ]
  return (
    <div id='shop'>
        <div className='homeP'>
            <h2>Category</h2>
            <div className='home_product'>
                {items .map((item, index) => (
                    <div
                        key={index}
                        className='cardss'
                        onClick={() => handleButtonClick(item.type)}
                    >
                        <img src={item.image} alt="image" />
                        <h2>{item.type}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeProduct
