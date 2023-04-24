import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import * as C from './styles'
import * as S from '../../components/Botao/styles';

import Input from '../../components/Input';
import imagemTubarao from '../../assets/images/tubarao-dando-ola.svg'


const Acesso = () => {

  const { acessa } = useAuth();
  const navigate = useNavigate();

  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleAcesso = async () => {
    if (!cpf | !senha) {
      setError('Preencha todos os campos');
      return;
    }

    const response = await acessa(cpf, senha);

    console.log(response);

    switch (response) {

      case 200:
        console.log("Acesso permitido");
        navigate('/conta');
        break;
      case 400:
        setError("CPF ou senha inválidas");
        break;
      case 404:
        setError("Cliente não cadastrado");
        break;
      case 500:
        setError("Erro interno");
        break;
      case 503:
        setError("Serviço indisponível");
        break;
      default:
        setError("Erro desconhecido");
        break;
    }

  };

  return (
    <C.Container>
      <C.ContainerContent>
        <C.LogoTubarao src={imagemTubarao} alt="Tubarão dando olá" />
        <C.ContainerComponents>
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
        </C.ContainerComponents>

      </C.ContainerContent>
    </C.Container>
  );
};

export default Acesso;