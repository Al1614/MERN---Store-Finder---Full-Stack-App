import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreHome from './components/StoreHome';
import StoreForm from './components/StoreForm';
import StoreDetail from './components/StoreDetail';
import EditStore from './components/EditStore';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreHome />} />
          <Route path="/store/create" element={<StoreForm/>} />
          <Route path="/store/:id" element={<StoreDetail/>} />
          <Route path="/store/edit/:id" element={<EditStore/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
