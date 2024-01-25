import React from "react";
import './FilterCheckbox.css';

export default function FilterCheckbox () {
   return (
   <div className="filter">
      <label htmlFor="checkbox" className="filter__switch">
         Короткометражки
         <input type="checkbox" className="filter__checkbox" id="checkbox" />
         <span className="filter__checkbox-button" />
      </label>
   </div>
   )
}