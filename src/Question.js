import React, { useState } from "react";
import { FaTimes,FaPlus } from "react-icons/fa";
const Question = ({ title, info }) => {
  const [isVisible, setIsVisible] = useState(false);
  const infoClassName=` white bg-rose-100 p-4 ${isVisible ? '' : 'none'}`;
  const ToggleVisible= ()=> setIsVisible(!isVisible);
  return (
    <li className="mt-2" onClick={ToggleVisible}>
      <div className="flex flex-between">
        <h5>{title} 
        </h5>
        <button className="btn" onClick={ToggleVisible}>{isVisible ? <FaTimes/> : <FaPlus/>}</button>
      </div>
      <p className={infoClassName}>{info}</p>
    </li>
  );
};

export default Question;
