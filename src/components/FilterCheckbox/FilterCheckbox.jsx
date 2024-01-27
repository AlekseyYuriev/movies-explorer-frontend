import React from "react";
import './FilterCheckbox.css';

export default function FilterCheckbox ({ onChange }) {
   return (
   <div className="filter">
      <label htmlFor="checkbox" className="filter__switch">
         Короткометражки
         <input
            type="checkbox" 
            className="filter__checkbox" 
            id="checkbox"
            onChange={(e) => onChange(e.target.checked)}
         />
         <span className="filter__checkbox-button" />
      </label>
   </div>
   )
}