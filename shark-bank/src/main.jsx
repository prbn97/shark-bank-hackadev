import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import {theme} from './styles/theme';

//Importação nomeada deixa a importação fortemente tipada, ou seja, se o nome do componente for alterado, o import não irá funcionar
import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
) 
