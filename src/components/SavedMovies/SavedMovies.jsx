import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../../utils/cards";
import Footer from "../Footer/Footer";

export default function SavedMovies ({ loggedIn }) {
   return (
      <>
         <Header loggedIn={loggedIn} />
         <SearchForm />
         <section className="savedmovies">
            <div className="savedmovies__list">
               {cards.map(card => 
               <MoviesCard movie={card.movie} text={card.text} key={card.id}/>
               )}
            </div>
         </section>
         <Footer />
      </>
   )
}