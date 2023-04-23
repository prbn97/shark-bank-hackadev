import React from 'react'
import * as C from './styles'
import Input from '../../components/Input'

import * as S from '../../components/Botao/styles';

import tubaraoConversando from '../../assets/images/tubarao-conversando.png'


function RedefinirSenha() {
  return (
    <C.Container>

      <div className= 'mainContent-style'>
         <div className='main_image-responsive'>
            <img src={tubaraoConversando} alt=''/>
         </div>

        <C.Content>
          <C.ContainerContentTitle>
            Redefinir senhas
          </C.ContainerContentTitle>

          <C.ContainerContentField>
            <div className='fieldSet_text'>
            Para redefinir a sua senha, informe o e-mail cadastrado na sua e lhe enviaremos um link com as intruções.
            </div>

            <Input
            type="email"
            placeholder="Digite aqui o seu e-mail"/>
            
            <div className='container_botoes'>
              <S.ButtonPrimario text="Enviar" onClick={() => [alert("Cadastro feito com sucesso?! *Fazer lógica para tela de acesso")]}>Enviar</S.ButtonPrimario>
              <S.ButtonSecundario text="Voltar" onClick={() => [alert("Cadastro feito com sucesso?! *Fazer lógica para tela de acesso")]}>Voltar</S.ButtonSecundario>
            </div>

          </C.ContainerContentField>
        </C.Content>
        
      </div>
      
    </C.Container>
  )
}

export default RedefinirSenha