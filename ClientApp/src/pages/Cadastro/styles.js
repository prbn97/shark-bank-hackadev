import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  height: 708px;
  width: 984px;
  margin: 148px 228px;


  gap: 128px;
`;

export const Section = styled.div`

margin-top: 215px;


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
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  max-width: 350px;
  padding: 20px;
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