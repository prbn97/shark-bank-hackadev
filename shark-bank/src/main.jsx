import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Pix } from './pages/Transferencia/Pix/pix';
import { Pix2 } from './pages/Transferencia/Pix/pix2';
import { Transferencia } from './pages/Transferencia/Transferencia/transferencia';
import { Transferencia2 } from './pages/Transferencia/Transferencia/transferencia2';
import { PaginaLogin } from './pages/Acesso/login';
// import { Senha } from './pages/Transferencia/Senha/senha';

import { theme } from './styles/theme';

//Importação nomeada deixa a importação fortemente tipada, ou seja, se o nome do componente for alterado, o import não irá funcionar
import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< Updated upstream
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      {/* <GlobalStyle /> */}
      {/* <Home /> */}
      {/* <Pix/> */}
      {/* <Pix2/> */}
      {/* <Transferencia/> */}
      {/* <Transferencia2/> */}
      {/* <Senha/> */}
      <PaginaLogin/>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
=======
  // <React.StrictMode>
  {/* <ThemeProvider theme={theme}> */ }
      {/* <GlobalStyle /> */ }
      {/* <Home /> */ }
      {/* <Pix/> */ }
      {/* <Pix2/> */ }
      {/* <Transferencia/> */ }
      {/* <Transferencia2/> */ }
      {/* </ThemeProvider> */ }
  {/* </React.StrictMode>, */ }
>>>>>>> Stashed changes
) 
