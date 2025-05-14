import React, { useReducer } from 'react'
import "./contact.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'


const reducer =(state, action) => {
    switch(action.type) {
        case "NAME" :
            return{...state, name: action.payload}
        case "EMAIL" :
            return{...state, email: action.payload}
        case "PHONENO" :
            return{...state, phoneNo: action.payload}
        case "MESSAGE" :
            return{...state, message: action.payload}
        default:
            console.log("Invalid Input")
            return state
    }
}

function Contact() {

    const [state, dispatch] = useReducer(reducer,{
        name: "",
        email: "",
        phoneNo: "",
        message: ""
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        navigate("/")
    }


  return (
    <div>
        <div className='contact_contain'>
            <h2>Let Get in Touch</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <label>Full Name</label>
                <input type="text" onChange={(e) => {dispatch({type: "NAME", payload: e.target.value})}} placeholder='enter full name' required />
                <label>Email Address</label>
                <input type="email" onChange={(e) => {dispatch({type: "EMAIL", payload: e.target.value})}} placeholder='enter email address' required />
                <label>Phone Number</label>
                <input type="number" onChange={(e) => {dispatch({type: "PHONENO", payload: e.target.value})}} placeholder='enter phone number' required />
                <label>Message</label>
                <textarea name="" id="" rows="10" onChange={(e) => {dispatch({type: "MESSAGE", payload: e.target.value})}} placeholder='enter your request' required></textarea>
                <input type="submit" value= "SUBMIT"/>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
