import React from "react";
import './Select.css';

export default function Select () {

   return (
      <select className="select">
         <option className="select__option" value="США">США</option>
         <option className="select__option" value="Великобритания">Великобритания</option>
         <option className="select__option" value="Канада">Канада</option>
         <option className="select__option" value="Бразилия">Бразилия</option>
      </select>
   )
}