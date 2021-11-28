import React from 'react';
import styles from './App.module.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Show } from './Pages/Show/Show';
import { Episode } from './Pages/Episode/Episode';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className={styles['App-container']}>
          <Header />
          <Routes>
            <Route path='/' element={<Show />} />
            <Route path='/show/:id' element={<Show />} />
            <Route
              path='/season/:season/episode/:episode'
              element={<Episode />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
