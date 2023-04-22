import React from 'react'
import * as C from './styles'
import Input from '../../components/Input'

import * as S from '../../components/Botao/styles';

import tubaraoConversando1 from '../../assets/images/tubarao-conversando.png'


function RedefinirSenha() {
  return (
    <C.Container>

      <div class="mainContent-style">

        <img src={tubaraoConversando1} alt=''/>

        <C.Form>
          <C.FormTitle>
          Redefinir senhas
          </C.FormTitle>

          <C.FieldSet>
            <div class="fieldSet_text">
            Para redefinir a sua senha, informe o e-mail cadastrado na sua e lhe enviaremos um link com as intruções.
            </div>

            <Input
            type="email"
            placeholder="Digite aqui o seu e-mail"/>


            <S.ButtonPrimario text="Cadastrar" onClick={() => [alert("Cadastro feito com sucesso?! *Fazer lógica para tela de acesso")]}>Cadastrar</S.ButtonPrimario>
            <S.ButtonSecundario text="Cadastrar" onClick={() => [alert("Cadastro feito com sucesso?! *Fazer lógica para tela de acesso")]}>Cadastrar</S.ButtonSecundario>
          </C.FieldSet>
        </C.Form>
        
      </div>
      
    </C.Container>
  )
}

export default RedefinirSenha