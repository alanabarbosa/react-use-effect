import React, { useState } from 'react';
import BannerHome from './BannerHome';
import { GlobalContext } from './GlobalContext';
import Produtos from './Produtos';

const Home = () => {
  const [contar, setContar] = useState(0);
  const global = React.useContext(GlobalContext);

  console.log(global)


  React.useEffect(() => {
    if (contar >= 10) document.title = 'Titulo mudou de acordo com o useEffect';
  }, [contar]);
  
  React.useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 1) console.log("scrollY é maior que 1");
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
    return (
      <>
        <main>
          <BannerHome
          titulo="Produtos"
          subtitulo="Este é um subtitulo">
          </BannerHome>
          <button onClick={() => setContar(contar + 1)}>contagem + {contar}</button>          
          
          {global.dados === null ? (
          <p>Carregando...</p>
        ) : (
          <Produtos dados={global.dados} />
        )}
        </main>
      </>
    )
}

export default Home;