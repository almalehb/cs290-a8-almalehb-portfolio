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
import ThankYouPage from './pages/ThankYouPage';

import AddChargingPageTable from './pages/AddChargingPageTable';
import EditChargingPageTable from './pages/EditChargingPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [chargingSession, setChargingSessionToEdit] = useState([])
  const [contactForm, setContactForm] = useState([])

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
              <Route path="/contact" element={<ContactPage setContactForm={setContactForm} />} />
              <Route path="/charging" element={<ChargingPage setChargingSession={setChargingSessionToEdit} />} />
              <Route path="/create" element={<AddChargingPageTable />} />
              <Route path="/update" element={<EditChargingPageTable chargingSessionToEdit={chargingSession} />} />
              <Route path="/thank-you" element={<ThankYouPage contactForm={contactForm} />} />
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