import React, { useState } from 'react';
import "./style/style.css"
const Accordian2 = () => {
  const [accordion, setAccordion] = useState([
    { title: 'A', content: 'Content for A', isShown: false },
    { title: 'B', content: 'Content for B', isShown: false },
    { title: 'C', content: 'Content for C', isShown: false },
    { title: 'D', content: 'Content for D', isShown: false },
  ]);

  const handleOnClick=(index)=>{
    const latestData=accordion.map((val,i)=>{
      if(i!=index){
        val.isShown=false
      }else{
        val.isShown=!val.isShown
      }
      return val
    })
    setAccordion(latestData)
  }
  return (
    <>
      {accordion.map((acc, i) => {
        return (
          <>
            <div className="accordion-container" key={i}>
              <div className="accordion">
                <h6 className="accordion-title" onClick={()=>handleOnClick(i)}>{acc.title}</h6>
              </div>
              {acc.isShown && <p className="accordion-content">{acc.content}</p>}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Accordian2;
