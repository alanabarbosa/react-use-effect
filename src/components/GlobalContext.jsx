import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  const limparDados = () => {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
