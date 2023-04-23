import React, { useState } from 'react'
import Input from '../../components/Input'
import * as C from './styles'
import * as S from '../../components/Botao/styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Cadastro = () => {
  const [cpf, setCPF] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { cadastra } = useAuth();

  const handleCadastra = () => {
    if (!cpf | !nomeCompleto | !email | !celular | !senha | !confirmarSenha) {
      setError('Preencha todos os campos');
      return;
    } else if (senha !== confirmarSenha) {
      setError('As senhas não conferem');
      return;
    }

    const response = cadastra(cpf, nomeCompleto, email, celular, senha);

    if (response) {
      setError(response);
      return;
    }

    alert('Cadastro realizado com sucesso!');
    navigate('/acesso');
  };

  return (
    <C.Container>
      <C.Title>
        Olá!<br />
        Seja bem-vindo ao<br />
        <span className="container_title-span">
          Shark Bank
        </span>
      </C.Title>

      <C.Form>
        <C.FormTitle>
          Cadastro
        </C.FormTitle>

        <C.FieldSet>
          <Input
            type="text"
            placeholder="Digite aqui o seu CPF"
            value={cpf}
            onChange={(error) => [setCPF(error.target.value), setError("")]}
          />

          <Input
            type="text"
            placeholder="Digite aqui o seu nome completo"
            value={nomeCompleto}
            onChange={(error) => [setNomeCompleto(error.target.value), setError("")]}
          />

          <Input
            type="email"
            placeholder="Digite aqui o seu e-mail"
            value={email}
            onChange={(error) => [setEmail(error.target.value), setError("")]}
          />

          <Input
            type="text"
            placeholder="Digite aqui o seu celular"
            value={celular}
            onChange={(error) => [setCelular(error.target.value), setError("")]}
          />

          <Input
            type="password"
            placeholder="Digite aqui a sua senha"
            value={senha}
            onChange={(error) => [setSenha(error.target.value), setError("")]}
          />

          <Input
            type="password"
            placeholder="Confirme a sua senha"
            value={confirmarSenha}
            onChange={(error) => [setConfirmarSenha(error.target.value), setError("")]}
          />
          <C.LabelError>{error}</C.LabelError>

          <S.ButtonPrimario text="Cadastrar" onClick={handleCadastra}>Cadastrar</S.ButtonPrimario>

          <C.LabelAcesso>
            Já é cliente?
            <C.Strong>
              <Link to="/acesso">&nbsp;Acesse sua conta</Link>
            </C.Strong>
          </C.LabelAcesso>
        </C.FieldSet>
      </C.Form>
    </C.Container>
  );
};

export default Cadastro;