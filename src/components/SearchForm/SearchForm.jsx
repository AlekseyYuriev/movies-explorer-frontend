import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm ({ onTextSearch, onDurationSearch }) {

   const [inputValue, setInputValue] = useState(localStorage.getItem('textSearch') || '');

   const handleInput = (e) => {
      setInputValue(e.target.value);
      onTextSearch(e.target.value);
      localStorage.setItem('textSearch', e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      onTextSearch(inputValue);
   }

   return (
      <section className="searchform">
         <form className="searchform__form" name="search-movies">
            <div className="searchform__window" >
               <input 
                  value={inputValue}
                  required 
                  className="searchform__input" 
                  type="text" 
                  placeholder="Фильм" 
                  name="find-movie"
                  onChange={handleInput}
               />
               <button 
                  className="searchform__button" 
                  type="submit"
                  onClick={handleSubmit}
               >
                  Найти
               </button>
            </div>
            <FilterCheckbox
               onChange={onDurationSearch} />
         </form>
   </section>
   )
}
