import React, { useState } from 'react'
import "./style/style.css"

const Accordian = ({title,content}) => {
    const [isShow, setIsShow]= useState(false)
  return (
    <>
        <div className="accordion-container">
            <div className="accordion">
                <h6 className="accordion-title" onClick={()=>setIsShow(!isShow)}>{title}</h6>
            </div>
            {isShow &&  <p className="accordion-content">{content}</p>}
        </div>
    </>
  )
}

export default Accordian