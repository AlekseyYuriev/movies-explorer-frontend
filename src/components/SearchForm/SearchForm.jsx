import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";
import { getFilterCheckbox, getTextSearch, getSelect } from "../../utils/localStorageManager";
import Select from "../Select/Select";

export default function SearchForm ({ onTextSearch, onDurationSearch, onSelectSearch, setInputError }) {

   const location = useLocation();

   let defaultInputValue = '';
   let defaultChecked = false;
   let defaultSelect = '';

   if (location.pathname==='/movies') {
      defaultInputValue = getTextSearch();
      defaultChecked = getFilterCheckbox();
      defaultSelect= getSelect();
   }

   const [inputValue, setInputValue] = useState(defaultInputValue);
   const [selectValue, setSelectValue] = useState(defaultSelect);

   const handleInput = (e) => {
      setInputValue(e.target.value);
      onTextSearch(e.target.value);
      if (setInputError){
         setInputError(false);
      }
      if(location.pathname==='/movies') {
         localStorage.setItem('textSearch', e.target.value);
      }      
   }

   const handleFilterCheckboxChange = (filterActive) => {
      onDurationSearch(filterActive);
      if(location.pathname==='/movies') {
         localStorage.setItem('filterCheckbox', filterActive);
      }
   }

   const handleSelect = (evt) => {
      setSelectValue(evt.target.value);
      onSelectSearch(evt.target.value);
      if(location.pathname==='/movies') {
         localStorage.setItem('select', evt.target.value);
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if(inputValue) {
         if (setInputError) {
            setInputError(false);
         }
         onTextSearch(inputValue);
      } else {
         if (setInputError) {
            setInputError(true);
         }
      }
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
               onChange={handleFilterCheckboxChange}
               initialChecked={defaultChecked} />
            <Select 
               onChange={handleSelect}
               selectValue={selectValue} />
         </form>
   </section>
   )
}
