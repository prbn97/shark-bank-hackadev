import React, { useState, useEffect } from "react";

export function TermoDeAceitacao() {
  const [userData, setUserData] = useState({});
  const [registro, setEndereco] = useState({});
  const [liEntendi, setLiEntendi] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }

    const storedEndereco = localStorage.getItem("registro");
    if (storedEndereco) {
      const parsedEndereco = JSON.parse(storedEndereco);
      setEndereco(parsedEndereco);
    }
  }, []);

  return (
    <div className="corpo">
        
        <div className="">
        <h1>Termo de Aceitação Criação de Conta Shark Bank</h1>
        </div>
      
      <div className="campo">
        Eu, {userData.nomeCompleto}, portador(a) do CPF {userData.cpf}, residente no endereço {registro.endereco}, 
        declaro que desejo  fazer parte do tanque de tubarões do Shark Bank e abrir uma 
        conta bancária com os dados pessoais e financeiros fornecidos. Juro solenemente que não sou um golfinho
         ou uma baleia infiltrada tentando abrir uma conta no Shark Bank. Prometo nadar com os tubarõezinhos em águas 
         cristalinas, sem medo de me afogar em dívidas. Quero fazer parte do tanque de tubarões do Shark Bank, onde
          os juros são como mordidas fortes e os empréstimos são como peixes frescos. Prometo manter minhas barbatanas
           limpas, meu fluxo de caixa constante e minhas finanças sob controle. Estou ciente de que qualquer 
           comportamento de golfinho ou de baleia pode resultar no encerramento da minha conta sem aviso prévio. 
           Estou animado para começar minha jornada como um tubarãozinho do Shark Bank e mal posso esperar para 
           morder as oportunidades financeiras que surgirem.
      </div>
      <label>
        <input type="checkbox" checked={liEntendi} onChange={(e) => setLiEntendi(e.target.checked)} />
        Li e entendi este Termo de Aceitação para Criação de conta e  concordo com seus termos e condições.
      </label>
    </div>
  );
}
