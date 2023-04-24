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

display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;

width: 50vw;
height: 85vh;

border-radius: 20px;
padding: 40px;

.DivButtonBack{
    display: flex;
    align-items: start;
    width: 100%;
}

.ButtonBack{
    background:none;
    border: none;
    
}
.DivButtonNext{
    width: 100%;
    display: flex;
    justify-content: end;
    
}

.ButtonNext{
    background:none;
    border: none;     
}

`;

export const Conteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 70%;

.ImagemTubarao{
    height: 20%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 25%;
    z-index: 0;
}



.Titulo{   
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #111B59;
    text-align: center;

}

.DivConteudo{
    background-color: #FFFFFF;
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    z-index: 1;

}






`;