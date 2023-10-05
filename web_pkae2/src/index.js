import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import GallerySelectPage from './Pages/GallerySelectPage/GallerySelectPage';
import CommissionsPage from './Pages/CommissionsPage/CommissionsPage';
import MerchPage from './Pages/MerchPage/MerchPage';
import HomePage from './Pages/HomePage/HomePage';
import KeyboardPage from './Pages/KeyboardPage/KeyboardPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:id" element={<GallerySelectPage />} />
          <Route path="commissions" element={<CommissionsPage />} />
          <Route path="merch" element={<MerchPage/>} />
          <Route path='keyboard' element={<KeyboardPage/>} />
        </Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
