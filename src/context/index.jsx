import React, { createContext } from 'react';
import axios from "axios";


export const DataContext = createContext();


export const DataProvider = ({ children }) => {

  //Hooks API get return




  //  Ingredientes (ron, vodka, gin)
  // 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'

  // buscar cocktails
  // www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

  // Add /preview to the end of the cocktail image URL
  // /images/media/drink/vrwquq1478252802.jpg/preview

  // random cocktail
  // www.thecocktaildb.com/api/json/v1/1/random.php

  return (
    <DataContext.Provider value={{

    }}>
      {children}
    </DataContext.Provider>
  )
}
