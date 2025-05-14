import React, { useEffect, useState } from 'react'
import "./log.css"

function Log() {

    const [vistorsCount, setVisitorCount] = useState(0)

    useEffect(() => {
        const countVisit = localStorage.getItem("visitorsCount")

        const newCount = countVisit ? parseInt(countVisit, 10) + 1 : 1

        setVisitorCount(newCount)
        localStorage.setItem("visitorsCount", newCount)
    }, [])
  return (
    <div className='log_container'>
        {vistorsCount}
    </div>
  )
}

export default Log

