import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './page/Home';
import About from './page/About';
import News from './page/News';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='news' element={<News/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
