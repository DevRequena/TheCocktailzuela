import { useState } from 'react'
import { Header } from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Pages';


function App() {


  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/* Estructura para asignar un nuevo componente */}
        {/* <Route path="/">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </>
  )
}

export default App
