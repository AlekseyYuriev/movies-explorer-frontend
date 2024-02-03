import React, { useState } from "react";
import './Select.css';

export default function Select ({ movies, onSelectSearch }) {

   const [select, setSelect] = useState('');

   const handleSelect = (evt) => {
      setSelect(evt.target.value);
      onSelectSearch(evt.target.value);
   }

   return (
      <label className="select__lable">
         Select Country:
            <select className="select" onChange={handleSelect} value={select} >
               <option className="select__option" value=" "> </option>
               <option className="select__option" value="США">США</option>
               <option className="select__option" value="Великобритания">Великобритания</option>
               <option className="select__option" value="Канада">Канада</option>
               <option className="select__option" value="Бразилия">Бразилия</option>
               <option className="select__option" value="Германия">Германия</option>
               <option className="select__option" value="Польша">Польша</option>
            </select>
      </label>
   )
}