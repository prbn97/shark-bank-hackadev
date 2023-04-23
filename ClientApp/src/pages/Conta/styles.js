import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;

export const User = styled.div`
display: flex;
align-items: center;
gap: 8px;
.UserName{
font-weight: 700;
font-size: 18px;
color: white;
}
`;
export const Saldo = styled.div`

font-weight: 700;
font-size: 16px;
color: #E6E6E6;
margin: 36px auto 24px;

.SaldoLabel{ 
  display: flex;
  gap: 128px;
  font-weight: 700;
  font-size: 16px;
 }

.Saldo_link-extrato a{
font-weight: 700;
font-size: 16px;
color: #E6E6E6; 
}

.SaldoOutput-style input{
  margin-top: 16px;
  height: 56px;
  width: 100%;
  background: linear-gradient(112.48deg, rgba(255, 255, 255, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);
  border-radius: 26px;
}

`;

export const ContainerBotoes = styled.div`
`;