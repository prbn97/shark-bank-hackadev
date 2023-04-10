import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';



import { theme } from './styles/theme';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages que estão okay
import { PaginaLogin } from './pages/Acesso/login';
import { Cadastro } from './pages/Cadastro/cadastro';
import { Registro } from './pages/Cadastro/registro';
import { TermoDeAceitacao } from './pages/Cadastro/termos';
import { EsqueciSenha } from './pages/Acesso/esqueciSenha'
import { EmailEnviado } from './pages/Acesso/emailEnviado';;
import { Principal } from './pages/Transferencia/Principal/principal';
import { Pix } from './pages/Transferencia/Pix/pix';
import { Pix2 } from './pages/Transferencia/Pix/pix2';
import { Pix3 } from './pages/Transferencia/Pix/pix3';
import { Transferencia } from './pages/Transferencia/Transferencia/transferencia';
import { Transferencia2 } from './pages/Transferencia/Transferencia/transferencia2';
import { Transferencia3 } from './pages/Transferencia/Transferencia/transferencia3';
import { Senha } from './pages/Transferencia/Senha/senha';
import { TransferenciaRealizada } from './pages/Transferencia/Sucesso/TranferenciaRealizada';

//Importação nomeada deixa a importação fortemente tipada, ou seja, se o nome do componente for alterado, o import não irá funcionar
import { Home} from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<PaginaLogin />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/termos' element={<TermoDeAceitacao />} />
        <Route path='/esquecisenha' element={<EsqueciSenha />} />
        <Route path='/emailenviado' element={<EmailEnviado />} />
        <Route path='/principal' element={<Principal />} />
        <Route path='/pix' element={<Pix />} />
        <Route path='/pix2' element={<Pix2 />} />
        <Route path='/pix3' element={<Pix3 />} />
        <Route path='/transferencia' element={<Transferencia />} />
        <Route path='/transferencia2' element={<Transferencia2 />} />
        <Route path='/transferencia3' element={<Transferencia3 />} />
        <Route path='/senha' element={<Senha />} />
        <Route path='/sucesso' element={<TransferenciaRealizada />} />
        
      </Routes>

    </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>,
) 
