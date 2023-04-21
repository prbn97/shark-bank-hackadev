import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import * as C from './styles'

import Input from '../../components/Input';
import Botao from '../../components/Botao';

const Acesso = () => {
  const { acessar } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email | !senha) {
      setError('Preencha todos os campos');
      return;
    }

    const response = acessar(email, senha);

    if (response) {
      setError(response);
      return;
    }

    navigate('/home');
  };

  return (
    <C.Container>
      <C.Label>Acesso</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite aqui o seu e-mail"
          value={email}
          onChange={error => setEmail(error.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite aqui a sua senha"
          value={senha}
          onChange={error => setSenha(error.target.value)}
        />
        <C.LabelError>{error}</C.LabelError>
        <Botao text="Acessar" onClick={handleLogin} />
        <C.LabelCadastro>
          Ainda não é cliente?
          <C.Strong>
            <Link to="/cadastro">&nbsp;Cadastre-se</Link>
          </C.Strong>
        </C.LabelCadastro>
      </C.Content>
    </C.Container>
  );
};

export default Acesso;