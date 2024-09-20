import React from 'react';
import Header from '../src/components/Header.jsx';
import Home from '../src/components/Home.jsx';
import Footer from '../src/components/Footer.jsx';
import { GlobalStorage } from './components/GlobalContext'; // Importando o Provider

const App = () => {
  return (
    <>
      <GlobalStorage> {/* Envolvendo a aplicação com o Provider */}
        <Header />
        <Home />
        <Footer />
      </GlobalStorage>
    </>
  );
};

export default App;
