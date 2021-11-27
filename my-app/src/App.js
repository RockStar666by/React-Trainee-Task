import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Show } from './Pages/Show/Show';
import { Episode } from './Pages/Episode/Episode';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Show />} />
          <Route exact path='/show/:id' element={<Show />} />
          <Route exact path='/episode/:id' element={<Episode />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
