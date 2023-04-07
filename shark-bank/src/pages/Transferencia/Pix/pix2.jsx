import React, { useState } from 'react';

export function Pix2() {
  const [campoTexto, setCampoTexto] = useState('');

  return (
    <div className="corpo">
      <div className='user'>

      </div>
      <div className='campo'>
      <button>Voltar</button>
        <br/>
        <h1>Para quem você quer transferir esse valor?</h1>
        <p>Encontre um contato na sua lista ou inicia uma nova transferência:</p>
        <input type="text" value={campoTexto} onChange={(event) => setCampoTexto(event.target.value)} />
        <br/>
        <button>Próximo</button>
      </div>
    </div>
  );
}
