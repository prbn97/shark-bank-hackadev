import React from 'react'
import * as C from './styles'
import UserIcon from '../../assets/images/user-icon.svg'
import NotificationButton from '../../assets/images/notification-button.svg'

import ButtonBack from '../../assets/images/ButtonBack.svg'
import ButtonNext from '../../assets/images/ButtonNext.svg'

import HappysShark from '../../assets/images/happyshark.svg'

import * as S from '../../components/Botao/styles'

function Pix4() {
  return (
    <C.Container>
      
      <C.User>
        
        {/* <C.ImagemUserIcon src={UserIcon} /> */}
        <img src={UserIcon} alt='icone com a inicial do usuário'/>
        <div className='UserName'>Olá, Lenny</div>
        <img src={NotificationButton} alt='icone com a inicial do usuário'/>
        
      </C.User>

      <C.Containt>
        <div className='DivButtonBack'>

            <button class="ButtonBack" type="button">
            <img src={ButtonBack} alt='Botao de voltar'/>
            {/* <img src={UserIcon} alt="Descrição da imagem"> */}
            </button>
        </div>



        <C.Conteudo>

            <img className='ImagemTubarao' alt='imagem de um tubarao fofinho' src={HappysShark}></img>
         
            <div className='DivConteudo'>

                <h2 className='Titulo'>Transferência realizada!</h2>
                <p>Para mais detalhes veja o histórico de transação da sua conta</p>

            </div>

            

        </C.Conteudo>

        <S.ButtonPrimario text="Voltar" >Voltar</S.ButtonPrimario>

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

export default Pix4;