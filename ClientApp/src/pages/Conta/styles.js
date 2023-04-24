import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;    
  gap: 24px;
  margin-top: 32px;

  width: 375px;
  height: 812px;
`;

export const User = styled.div`
display: flex;
align-items: center;
gap: 8px;
.UserName
{
  font-weight: 700;
  font-size: 18px;
  color: white;
}
.user_Notification-estilo{
  width: 40px;
  height: 40px;
  background: #DFA634;
  border-radius: 8px;
  border: none;
  
}
`;
export const Saldo = styled.div`
font-weight: 700;
font-size: 16px;
color: #E6E6E6;
margin: 36px auto 24px;
.SaldoLabel 
{
  display: flex;
  gap: 128px;
  font-weight: 700;
  font-size: 16px;
 }
 .Saldo_link-extrato
 {
    display: flex;
    gap: 8px;
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
  border: none;
  background: linear-gradient(112.48deg, rgba(255, 255, 255, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);
  border-radius: 26px;
}
.SaldoOutput-style input:hover{
  border: solid ;}
`;
export const Servicos = styled.div`

display: flex;
gap: 16px;
.services_buttons-estilo{
  font-weight: 600;
  font-size: 14px;

  text-align: center;
  color: #FFFFFF;

}
.services_buttons-estilo button{  
background: #101626;
border-radius: 13.6391px;
width: 56px;
height: 56px;
margin-bottom: 8px;
border: none;
}
.services_buttons-estilo button:hover{
  background: linear-gradient(180deg, #DFA634 0%, #101626 100%);

}

`;

export const Investimentos = styled.div`
display: flex;
gap: 16px;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

.card-estilo{
  width: 150px;
  height: 184px;
  background: #D9D9D9;
  border-radius: 8px ;
  filter: drop-shadow(8px 8px 3px rgba(0, 0, 0, 0.4));

  display: flex;
  flex-direction: column;
  align-items: center; 
}
.card-estilo:hover{
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
}
.card-estilo p{
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 10px;
  line-height: 8px;
  color: #101626;
  
  
}
.card-estilo p span{
  margin-left: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 32px;
}

.card-estilo button{
  border: none;
  background: linear-gradient(180deg, #EBEBEB 24.32%, #101626 120.61%);
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  Width: 132px;
}
.card-estilo button:hover{

  background: linear-gradient(178.81deg, #EBEBEB 15.39%, #101626 83.45%);
  box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.6);
}
`;

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

