import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

export function Transferencia() {
  const [saldoConta, setSaldoConta] = useState(0);
  
  function InputChange(event) {
    const valor = event.target.value;
    const novoSaldo = valor.replace(/\D/g, '') / 100;
    setSaldoConta(novoSaldo);
  }
  
  function formatarSaldo(saldo) {
    const saldoFormatado = saldo.toFixed(2).replace('.', ',');
    return `R$ ${saldoFormatado}`;
  }
  
  return (
    <div className="App">
      <h1>Qual é o valor da transferência?</h1>
      <p>Saldo disponível em conta:</p>
      {/* <p>{formatarSaldo(saldoConta)}</p> */}
      <input type="text" value={formatarSaldo(saldoConta)} onChange={InputChange} />
      <br/>
      {/* <Link to="/outra-pagina"> */}
        <button>Registrar</button>
      {/* </Link> */}
      
    </div>
    
  );
}


