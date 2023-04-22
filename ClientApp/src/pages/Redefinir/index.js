import React from 'react'
import * as C from './styles'
import Input from '../../components/Input'

import * as S from '../../components/Botao/styles';

import tubaraoConversando1 from '../../assets/images/tubarao-conversando.png'


function RedefinirSenha() {
  return (
    <C.Container>

      <div className= 'mainContent-style'>
         <div className='main_image-responsive'>
            <img src={tubaraoConversando1} alt=''/>
         </div>

        <C.Form>
          <C.FormTitle>
            Redefinir senhas
          </C.FormTitle>

          <C.FieldSet>
            <div className='fieldSet_text'>
            Para redefinir a sua senha, informe o e-mail cadastrado na sua e lhe enviaremos um link com as intruções.
            </div>

            <Input
            type="email"
            placeholder="Digite aqui o seu e-mail"/>
            
            <div className='container_botoes'>
              <S.ButtonPrimario text="Cadastrar" onClick={() => [alert("Cadastro feito com sucesso?! *Fazer lógica para tela de acesso")]}>Cadastrar</S.ButtonPrimario>
              <S.ButtonSecundario text="Cadastrar" onClick={() => [alert("Cadastro feito com sucesso?! *Fazer lógica para tela de acesso")]}>Cadastrar</S.ButtonSecundario>
            </div>

          </C.FieldSet>
        </C.Form>
        
      </div>
      
    </C.Container>
  )
}

export default RedefinirSenha