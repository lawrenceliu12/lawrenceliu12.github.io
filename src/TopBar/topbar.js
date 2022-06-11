import React from 'react'
import './topbar.css'

const topbar = () => {
  return (
    <div className = "topbar">
        <span className = "topbar-logo">
            <a href = "/Home">Lawrence Liu</a>
        </span>
        <div className = "topbar-elements">
            <a href = "/Experiences">Experiences</a>
            <a href = "/Projects">Projects</a>
            <a href = "/Contact">Contact Me!</a>
        </div>
        <div>
             <div className = "topbar-toggle">
                 <div className = "bar">
                     
                 </div>
             </div>
        </div>
    </div>
  )
}

export default topbar