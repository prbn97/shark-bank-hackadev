import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const ContainerContent = styled.div`
  width:70vw;
  display: flex;
  align-items:center;
  justify-content:space-around;
  `;

export const LogoTubarao = styled.img`
`;

export const ContainerComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #ebebeb;
  
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 344px;
  height: 344px;
  box-shadow: 0 1px 2px #0003;
  background-color: #D9D9D9;
  max-width: 350px;
  padding: 20px;
  border-radius: 26px;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const ContentAccountPassword = styled.div`
width: 95%;
display: flex;
justify-content: space-around;
gap: 10px;
`;
export const RememberAccount = styled.div`
display: flex;

  .TextRememberAccount{
    margin-left: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #345170;
  }
`;

export const ForgetPassword = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #345170;
  text-decoration-line: underline;
`;

export const Strong = styled.strong`
  cursor: pointer;
  .cadastro_link{
    text-decoration: none;
    color: #676767;
  }
`;

export const LabelCadastro = styled.label`
  font-size: 16px;
  color: #676767;
`;