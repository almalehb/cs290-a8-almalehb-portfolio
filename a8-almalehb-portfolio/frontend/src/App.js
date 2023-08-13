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
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import ChargingPage from './pages/ChargingPage';

import AddMoviePageForm from './pages/AddMoviePageForm';
import AddMoviePageTable from './pages/AddMoviePageTable';
import EditMoviePageForm from './pages/EditMoviePageForm';
import EditMoviePageTable from './pages/EditMoviePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [chargingSession, setChargingSessionToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

        <header>
          <img src="android-chrome-192x192.png" alt="Besher Al Maleh"></img>
          <h1>Besher Al Maleh</h1>
          <p>Web development fundamentals, including HTML, CSS, and JavaScript.</p>
        </header>

        <PageNavigation />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/topics" element={<TopicPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/charging" element={<ChargingPage setChargingSession={setChargingSessionToEdit} />} />
              {/* <Route path="/create" element={<AddMoviePageForm />} />  */}
              <Route path="/create" element={<AddMoviePageTable />} />
              {/* <Route path="/update" element={<EditMoviePageForm movieToEdit={movie} />} /> */}
              <Route path="/update" element={<EditMoviePageTable chargingSessionToEdit={chargingSession} />} />
            </Routes>
          </section>
        </main>

        <footer>
          &copy; 2023 Besher Al Maleh
        </footer>

      </BrowserRouter>
    </>
  );
}

export default App;