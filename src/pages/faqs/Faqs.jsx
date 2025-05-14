import React, { useState } from 'react'
import "./faqs.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Faqs() {

    const [active, setActive] = useState(null)
    const accordion = (index) => {
        setActive(prev => prev === index ? null : index)
    }

    const questions = [
        {
            question : "Do you offer delivery?",
            answer : "Yes, we offer local delivery and statewide deliveries. Delivery fees may apply based on location."
          },
      
          {
            question : "What types of service do you offer?",
            answer : "We offer a wide range of treats including butter cakes, chocolate cakes, red velvet, cupcakes, croissants, danishes, eclairs, and more."
          },
      
          {
            question : "Do you take custom offer?",
            answer : "Yes! We create custom cakes for birthdays, weddings, and special occasions. Just contact us with your design and flavor preferences."
          }
    ]
  return (
    <div id='faqs'>
      <div className='freq'>
        <h2>Frequently Asked Questions</h2>
        <div className='ask'>
            {questions.map((item, index) => (
              <div
                className={`ques ${active === index ? "active" : ""}`}
                key={index}
                onClick={() => accordion(index)}
              >
                  <div className='question'>
                    <h5>{item.question}</h5>
                    <FaRegArrowAltCircleRight
                      style={{
                        transform: active === index ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}
                    />
                  </div>
                  {active === index && (
                    <p className='answer'>{item.answer}</p>
                  )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
