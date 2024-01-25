import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function Movies ({ loggedIn }) {
   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm />
            <MoviesCardList />
         </main>
         <Footer />
      </>
   )
}