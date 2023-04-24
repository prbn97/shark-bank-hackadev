import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`;

export const User = styled.div`
display: flex;
align-items: center;

gap: 8px;

margin: 40px 0px 10px 0px;
.UserName{
font-weight: 700;
font-size: 18px;
color: white;
}
;

`;

export const Containt = styled.div`

background-color: #D9D9D9;

width: 50vw;
height: 85vh;

border-radius: 20px;
padding: 40px;

.ButtonBack{
    background:none;
    border: none;
    
}
.DivButtonNext{
    display: flex;
    justify-content: end;
    margin-right: 60px;
}

.ButtonNext{
    background:none;
    border: none;     
}

`;

export const Conteudo = styled.div`
width: 50%;
margin: 70px;
line-height: 2;

.Titulo{   
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #111B59;

}
.SubTitulo{
    
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    margin-bottom: 10px;
}

.ConjuntoDeInputs{
display: flex;
gap: 20px;
}

.input{
    margin-top: 16px;
  height: 56px;
  width: 70px;
  background: linear-gradient(112.48deg, rgba(27, 133, 195, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);
border: 1.5px solid #1B85C3;
border-radius: 39px;
}



`;