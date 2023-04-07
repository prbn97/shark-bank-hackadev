import { useState, useRef } from "react";

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
    console.log(password); // imprime a senha
  }

  return (
    <div className="senhaCampo">
        <button>Voltar</button>
        <br/>
        <div className="">
        <span>Digite a senha de 4 digitos do seu cartão</span>
        <br/>
      {digitos.map((digit, index) => (
        <input
          key={index}
          type="password"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          ref={refs[index]}
        />
      ))}
      <br/>
      <button onClick={handleNext}>Próximo</button>
      </div>
    </div>
  );
}
