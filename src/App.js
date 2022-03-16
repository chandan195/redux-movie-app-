import React from 'react'
import { BrowserRouter as Router, Routes,Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from './components/MovieDetail/MovieDetail';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className='container'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route exact path="/movie/:imdbID" element={<MovieDetail />}/>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </div>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
