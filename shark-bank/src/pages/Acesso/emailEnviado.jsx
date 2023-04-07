

export function EmailEnviado() {

  return (
    <div className="AchoQueCorpo">
      <h1>Email enviado</h1>
      <div className="AchoQueCampo">
      
      <p>
      Foi enviado um e-mail para sua caixa de entrada, siga as instruções para a 
      recuperação da sua senha.
      </p>

      <button onClick={() => window.history.back()}>Voltar</button>
      </div>
    </div>
  );
}
