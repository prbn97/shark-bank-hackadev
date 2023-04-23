import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 161px;
  margin: auto;
  margin-top: 150px; 
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

.checkBox_estilo{
  width: 24px;
  height: 24px;
  

}
.checkBox_estilo:hover{

}

`;

