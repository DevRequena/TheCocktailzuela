import React, { createContext } from 'react';
import axios from "axios";


export const DataContext = createContext();


export const DataProvider = ({ children }) => {

  //Hooks API get return





  return (
    <DataContext.Provider value={{

    }}>
      {children}
    </DataContext.Provider>
  )
}
