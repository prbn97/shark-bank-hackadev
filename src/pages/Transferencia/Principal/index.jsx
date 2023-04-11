import { Container } from './styles';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ButtonPix } from "../../../components/Lobby/Pix";
import { ButtonTrans } from "../../../components/Lobby/Transferir";
import Bateria from '../../../assets/bateria.png'
import {Input} from '../../../components/Input'
import styled from '../../../styles/pages/Transferecia/globalTransferencia.css'
import Depositar from '../../../assets/Depositar-icon.svg'

export function Principal() {
  const [tabelaT, setTabelaT] = useState("");
  const [tabelaT2, setTabelaT2] = useState("");

  useEffect(() => {

    const tabelaTValue = localStorage.getItem("tabelaT");
    const tabelaT2Value = localStorage.getItem("tabelaT2");

    setTabelaT(tabelaTValue);
    setTabelaT2(tabelaT2Value);
  }, []);

  return (
    <Container>

      <img src={Bateria} alt="" />

      <body>
        
              
        <fieldset className='fieldset'>

          <label className='label' htmlFor="">Saldo</label>
          
          

          <input className='inputsaldo' type="text" />

          <div className='botoesPix'>

            <div>
              <Link to="/pix">
              <ButtonPix className="botaopix" />
              </Link>
              <p>Pix</p>

            </div>

            <div>
              <Link to="/transferencia">
              <ButtonTrans  className="botaotransferencia" />
              </Link>
              <p>Transferir</p>

            </div>
         
          </div>

          <div className='historico'>
            <label className='label' htmlFor="">Histórico</label>
            
            <input className='inputsaldo' type="text" />
          </div>

          <div>

            <div className='Trasnferencia'>
              
              <img src={Depositar} alt="" />
              
              <section className='TrasnferenciaTexto'>
                <h3>Transferência enviada (tipo)</h3>
                <p>Beneficiário</p>
                <p><span>R$ 0000,00</span></p>
              </section>

              <section className='TrasnferenciaMes'>
                <h3>00 Mês</h3>
              </section>

            </div>

            <div className='Trasnferencia'>
              
              <img src={Depositar} alt="" />
              
              <section className='TrasnferenciaTexto'>
                <h3>Transferência enviada (tipo)</h3>
                <p>Beneficiário</p>
                <p><span>R$ 0000,00</span></p>
              </section>

              <section className='TrasnferenciaMes'>
                <h3>00 Mês</h3>
              </section>

            </div>

            <div className='Trasnferencia'>
              
              <img src={Depositar} alt="" />
              
              <section className='TrasnferenciaTexto'>
                <h3>Transferência enviada (tipo)</h3>
                <p>Beneficiário</p>
                <p><span>R$ 0000,00</span></p>
              </section>

              <section className='TrasnferenciaMes'>
                <h3>00 Mês</h3>
              </section>

            </div>

            <div className='Trasnferencia'>
              
              <img src={Depositar} alt="" />
              
              <section className='TrasnferenciaTexto'>
                <h3>Transferência enviada (tipo)</h3>
                <p>Beneficiário</p>
                <p><span>R$ 0000,00</span></p>
              </section>

              <section className='TrasnferenciaMes'>
                <h3>00 Mês</h3>
              </section>

            </div>

            <div className='Trasnferencia'>
              
              <img src={Depositar} alt="" />
              
              <section className='TrasnferenciaTexto'>
                <h3>Transferência enviada (tipo)</h3>
                <p>Beneficiário</p>
                <p><span>R$ 0000,00</span></p>
              </section>

              <section className='TrasnferenciaMes'>
                <h3>00 Mês</h3>
              </section>

            </div>





          </div>









        </fieldset>



        

      
        



      </body>











      {/* <img src={Bateria} alt="imagem da bateria do celular" />
      <div className="user">
        <h1>Histórico de Transferências</h1>
      </div>

      <div className="botao">
        <Link to="/pix">
          <ButtonPix className="botaopix" />
        </Link>

        <Link to="/transferencia">
          <ButtonTrans className="botaotransferencia" />
        </Link>

      </div>
      <fieldset id="fields-set">
        <div className="campo">
          <p> {tabelaT}</p>
          <p> {tabelaT2}</p>
        </div>
      </fieldset> */}

    </Container>
  );
}
