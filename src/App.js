import React from 'react'

import { BrowserRouter, Route} from "react-router-dom";
import CharacterList from './components/Characters/CharcterList';
import Header from './components/Home/Header';
import LocationList from './components/Home/LocationList';

/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <BrowserRouter>
        <Header />
        <Route exact path="/" component={LocationList}></Route>
        <Route path="/character" component={CharacterList}></Route>
    </BrowserRouter>
  
   )

 }

export default App