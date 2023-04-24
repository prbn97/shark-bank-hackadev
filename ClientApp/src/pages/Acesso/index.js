import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import * as C from './styles'

import Input from '../../components/Input';

import imagemTubarao from '../../assets/images/tubarao-dando-ola.svg'

import * as S from '../../components/Botao/styles';

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
      <C.ContainerContent>

        <C.LogoTubarao src={imagemTubarao} alt="Tubarão dando olá" />
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

            <C.ContentAccountPassword>

              <C.RememberAccount>
                <input type='checkbox' name="Lembrar conta"></input>
                <p className='TextRememberAccount'>Lembrar conta </p>
              </C.RememberAccount>

              <C.ForgetPassword>
                <Link to="/redefinir">&nbsp; Esqueci a senha</Link>
              </C.ForgetPassword>

            </C.ContentAccountPassword>
            <S.ButtonPrimario text="Acessar" onClick={handleAcesso}>Acessar</S.ButtonPrimario>
            <C.LabelCadastro>
              Ainda não é cliente?
              <C.Strong>
                <Link to="/cadastro">&nbsp;Cadastre-se</Link>
              </C.Strong>
            </C.LabelCadastro>
          </C.Content>
        </C.containerLabel>

      </C.ContainerContent>
    </C.Container>
  );
};

export default Acesso;