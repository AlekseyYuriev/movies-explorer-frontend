import React from "react";
import './Select.css';

export default function Select ({ selectValue, onChange, allCountries }) {

   return (
      <label className="select__lable">
         Select Country:
            <select className="select" onChange={onChange} value={selectValue} >
               {allCountries.map((country, index) => {
                     return <option className="select__option" key={index} value={country}>{country}</option>
                  })}
            </select>
      </label>
   )
}
