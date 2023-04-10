import { useState, useRef } from "react";
import { ButtonRecuar } from "../../../components/Button/Recuar";
import { ButtonAvancar } from "../../../components/Button/Avancar";
import { Link } from 'react-router-dom';
import Bateria from '../../../assets/bateria.png'

//falta css e estilizar 
export function Senha() {
  const [digitos, setDigits] = useState(["", "", "", ""]); // array com os dígitos
  const refs = [useRef(), useRef(), useRef(), useRef()]; // array com as referências para os campos

  function handleChange(e, index) {
    const value = e.target.value;
    if (isNaN(value) || value.length > 1) return; // aceita apenas 1 dígito
    const novosDigitos = [...digitos];
    novosDigitos[index] = value;
    setDigits(novosDigitos);
    if (index < 3) {
      refs[index + 1].current.focus(); // muda para o próximo campo
    }
  }

  function handleNext() {
    const password = digitos.join(""); // une os dígitos em uma senha
    localStorage.setItem('senha', password);

    console.log(password); // imprime a senha
  }

  return (
    <div className="corpo">

      <img src={Bateria} alt="imagem da bateria do celular" />   

        
        
        <div className="campo">

        <fieldset id="fields-set">

          <div className="user">
            
            <ButtonRecuar onClick={() => window.history.back()}/>
            
          </div>
          <h1>Digite a senha de 4 digitos do seu cartão</h1>
          <br/>
          <div className="inputSenha">

            {digitos.map((digit, index) => (
              <input className="inputReduzido04"
                key={index}
                type="password"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                ref={refs[index]}
                
              />
            ))}
          </div>

        </fieldset>

          <div className='botaoAvancar'>
            <Link to="/sucesso">
            <ButtonAvancar onClick={handleNext}/>
            </Link>
          </div>
          
      </div>
    </div>
  );
}
