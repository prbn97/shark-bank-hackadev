import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 161px;
  margin: auto;
  margin-top: 100px; 
`;

export const Title = styled.div`
  @media screen and (max-width: 1023px) {
    display: none; 
  }
  min-width:438px;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  color: #FFFFFF;

  .container_titulo-destaque
    { 
      color: #DFA634;
    }
`;
export const Form = styled.div`
  min-width: 343px;
  height: 708px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;



/*titulo*/
export const FormTitle = styled.label`
  font-weight: 700;
  font-size: 2.25rem;
  color: #EBEBEB;

`;
/* formulário */
export const FieldSet = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 2px #0003;
  padding: 1.5rem;
  background: #D9D9D9;
  border-radius: 26px;
`;

export const LabelAcesso = styled.label`
  font-size: 1rem;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: .875rem;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const CheckBox = styled.div`

//checkbox funcional
input{
  display: none;

}
//checkbox visual -estilo
label::before{
  content: '';
  display: block;
  Width: 24px;
  Height: 24px;
  background: #D9D9D9;
  border: 1px solid #000000;
  border-radius: 5px;
}
//check box aceito -estilo
input:checked + label::before {
  background: #DFA634;
  border: 2px solid #000000;
}
//houver do checkbox -estilo
input:hover + label::before{  
  border: 2px solid #000000;
}

//alinhamento do checkbox visual com o texto
label{
  font-weight: 600;
  font-size: 12px;
  color: #111B59;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
}



label a{ color: #DFA634; }

`;

