// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import PageNavigation from './components/PageNavigation';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import Products from './data/products';
// import HomePage from './pages/HomePage';
// import TopicPage from './pages/TopicPage';
// import GalleryPage from './pages/GalleryPage';
// import OrderPage from './pages/OrderPage';
// import ContactPage from './pages/ContactPage';

import MoviesPage from './pages/MoviesPage';
import AddMoviePageForm from './pages/AddMoviePageForm';
import AddMoviePageTable from './pages/AddMoviePageTable';
import EditMoviePageForm from './pages/EditMoviePageForm';
import EditMoviePageTable from './pages/EditMoviePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [movie, setMovieToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Movie Collection</h1>
            <p>Describe this collection.</p>
          </header>

          <PageNavigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<MoviesPage setMovie={setMovieToEdit}/>} />
                    {/* <Route path="/create" element={<AddMoviePageForm />} />  */}
                    <Route path="/create" element={<AddMoviePageTable />} /> 
                    {/* <Route path="/update" element={<EditMoviePageForm movieToEdit={movie} />} /> */}
                    <Route path="/update" element={<EditMoviePageTable movieToEdit={movie} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>Copyright statement</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;