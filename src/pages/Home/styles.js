import styled from "styled-components";
import background from '../../assets/background-home.svg';

export const Container = styled.main`
    margin: auto;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-image: url(${background});


    .conteudo__home {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 375px;
    height: 812px;
    }

    .conteudo__home__titulo {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 167px;
    height: 80px;
    
    }

    .conteudo__home__titulo__ h1 {
        color: #111B59;
    }

    .conteudo__home__titulo__h2 {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_FORMULARIO_CONTAINER};
        font-size: 14px;
        text-align: center;
    }

    .conteudo__home__apresentacao{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    height: 80px;
    margin-top: 20px;
    }

    .conteudo__home__apresentacao img{
        margin-bottom: 20px;
    }
    
    .conteudo__home__apresentacao h2 {
        font-size: 20px;
        font-weight: 700;
        
    }

    .conteudo__home__apresentacao p {
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 30px;
    }



    .conteudo__home__botoes {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    gap: 16px;
    }    
`;
