import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import * as C from './styles'

import Input from '../../components/Input';
import Botao from '../../components/Botao';

import imagemTubarao from '../../assets/images/tubarao-dando-ola.svg'

const Acesso = () => {

  const { acessa } = useAuth();
  const navigate = useNavigate();

  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleAcesso = () => {
    if (!cpf | !senha) {
      setError('Preencha todos os campos');
      return;
    }

    const response = acessa(cpf, senha);

    if (response) {
      setError("CPF ou senha inválidos");
      return;
    }
    navigate('/conta');
  };

  return (
    <C.Container>
        <C.containerContent>
          <img src={imagemTubarao} alt="Tubarão dando olá" />
          <C.containerLabel>

            <C.Label>Acesso</C.Label>
            <C.Content>
              <Input
                type="text"
                placeholder="Digite aqui o seu CPF"
                value={cpf}
                onChange={(error) => [setCPF(error.target.value), setError("")]}
                />
              <Input
                type="password"
                placeholder="Digite aqui a sua senha"
                value={senha}
                
                onChange={(error) => [setSenha(error.target.value), setError("")]}
                />
              <C.LabelError>{error}</C.LabelError>
              <Botao text="Acessar" onClick={handleAcesso} />
              <C.LabelCadastro>
                Ainda não é cliente?
                <C.Strong>
                  <Link to="/cadastro">&nbsp;Cadastre-se</Link>
                </C.Strong>
              </C.LabelCadastro>
            </C.Content>
          </C.containerLabel>

        </C.containerContent>
    </C.Container>
  );
};

export default Acesso;