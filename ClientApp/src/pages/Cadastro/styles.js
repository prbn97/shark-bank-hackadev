import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  gap: 230px;
  justify-content: center;
  margin: auto 24px;
  

  
`;

export const Section = styled.div`
  
  margin-top: 200px;
  h1{
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
  }
  span{ color: #DFA634; }
  

`;

export const Form = styled.div`
`;



/*titulo*/
export const Label = styled.label`



  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #EBEBEB;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

`;
/* formulário */
export const Content = styled.div`
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