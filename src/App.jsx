// App.js
//import React from "react";
import Bar from "./Bar";
import Home from "./Home";
import Footer from "./Footer";
import Login from "./login/Login";
import "./index.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Bar />
      <Home />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='Login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
   
    
  );
};

export default App;
