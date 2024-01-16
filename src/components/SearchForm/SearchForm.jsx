import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm () {
   return (
      <section className="searchform">
         <form className="searchform__form" name="search-movies">
            <input className="searchform__input" type="text" placeholder="Фильм" name="find-movie"/>
            <button className="searchform__button" type="submit">Найти</button>
         </form>
         <FilterCheckbox />
   </section>
   )
}
