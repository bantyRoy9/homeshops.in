import React from 'react';
import Navbar from './Components/Header';
import Banner from './Components/Banner';
import Categories from './Components/Categories';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Banner />
      <Categories />
    </div>
  );
};

export default App;
