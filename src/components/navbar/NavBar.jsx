import React, { useState } from 'react'
import "./navBar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import eproject from "/eproject.png"
import { FiMenu, FiX } from "react-icons/fi"
import Log from '../log/Log'

function NavBar() {

    const nav =[
        {
            item: "About Us", path: "/about"
        },

        {
            item: "Merchandise", path: "/merchandise"
        },

        {
            item: "FAQS", path: "#faqs"
        },

        {
            item: "Contact Us", path: "/contact"
        }
    ]

    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()

    const handleScroll = (e, path) => {
        e.preventDefault()
        navigate("/")
        const element = document.querySelector(path)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
            setOpenMenu(false)
        }
    }

  return (
    <div>
        <div className='navbar'>

            <div style={{width: "40%", display: "flex"}}>
                <Log/>
                <div>
                    <NavLink to= "/">
                        <img src={eproject} alt="bakerz" className='logo' />
                    </NavLink>
                </div>
            </div>
            <button className='hamburger' onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <FiX/> : <FiMenu/>}
            </button>
            <div className={`nav ${openMenu ? "open" : ""}`}>
                {nav.map(({item,path}) => (
                    path.startsWith("#") ? (
                        <a 
                            key={item}
                            href={path}
                            className='item'
                            onClick={(e) => handleScroll(e, path)}
                        >
                            {item} 
                        </a>
                    ) : (
                        <NavLink
                            key={item}
                            to={path}
                            className= "item"
                            onClick={() => setOpenMenu(false)}
                         >
                            {item}
                        </NavLink>
                    )
                ))}
            </div>
        </div>
    </div>
  )
}

export default NavBar
