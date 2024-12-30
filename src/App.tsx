import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import DefaultContainer from './DefaultContainer';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultContainer />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
