import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { getMovies } from "../../utils/MoviesApi";

export default function Movies ({ loggedIn }) {

   const [movies, setMovies] = useState([]);

   useEffect(() => {
      async function getAllMovies () {
         const films = await getMovies();
         setMovies(films);
      }
      getAllMovies();
   }, [])

   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm />
            <MoviesCardList
               movies={movies} />
         </main>
         <Footer />
      </>
   )
}