import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 161px;
  margin: 148px 268px 168px ;
`;

export const Title = styled.div`
  min-width:438px;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  color: #FFFFFF;

  .container_title-span
    { color: #DFA634; }
  

`;
export const Form = styled.div`
  min-width: 343px;
  height: 708px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;



/*titulo*/
export const FormTitle = styled.label`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #EBEBEB;
  margin-bottom: 16px;

`;
/* formulário */
export const FieldSet = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 2px #0003;
  padding: 24px;
  background: #D9D9D9;
  border-radius: 26px;
`;

export const LabelAcesso = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;