import React from 'react'
import * as C from './styles'
import UserIcon from '../../assets/images/user-icon.svg'
import NotificationButton from '../../assets/images/notification-button.svg'

import Input from '../../components/Input';
import ButtonBack from '../../assets/images/ButtonBack.svg'
import ButtonNext from '../../assets/images/ButtonNext.svg'


function Pix2() {
  return (
    <C.Container>
      
      <C.User>
        
        {/* <C.ImagemUserIcon src={UserIcon} /> */}
        <img src={UserIcon} alt='icone com a inicial do usuário'/>
        <div className='UserName'>Olá, Lenny</div>
        <img src={NotificationButton} alt='icone com a inicial do usuário'/>
        
      </C.User>

      <C.Containt>

        <button class="ButtonBack" type="button">
          <img src={ButtonBack} alt='Botao de voltar'/>
          {/* <img src={UserIcon} alt="Descrição da imagem"> */}
        </button>


        <C.Conteudo>
          <h2 className='Titulo'>Encontre um contato na sua lista ou inicie
uma nova transferência.</h2>
          <p className='SubTitulo'>Saldo disponível em conta de R$ 0,00</p>

          <Input className='Input'
            type="text"
            placeholder="Digite a chave pix aqui"
          
          />

        </C.Conteudo>

        <div class="DivButtonNext">

          <button class="ButtonNext" type="button">
            <img src={ButtonNext} alt='Botao de avancar'/>
            {/* <img src={UserIcon} alt="Descrição da imagem"> */}
          </button>

        </div>


        

      </C.Containt>

      
    </C.Container>
  )
}

export default Pix2;