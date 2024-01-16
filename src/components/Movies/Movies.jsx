import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

export default function Movies ({ loggedIn }) {
   return (
      <>
         <Header loggedIn={loggedIn} />
         <SearchForm />
      </>
   )
}