import styled from "styled-components";

export const Container = styled.main`
    
    margin: 0;
    padding: 0;
    


    .label{
        
        color: #E6E6E6;
    }
    .fieldset{
        flex-direction: column;
        align-items: center;
    }

    .inputsaldo{
        background: linear-gradient(112.48deg, rgba(255, 255, 255, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);
        
        border-style: none;
        border: 1px solid #fff;
        border-radius: 26px;
        box-sizing: border-box;
        font-weight: 500;
        height: 40px;
        width: 295px;
        padding-left: 20px;
    }


    .botoesPix{
        margin-top: 24px;
        text-align: center;
        gap: 3em;
        display: flex;
        justify-content: space-around;
        
    }
    
    .botoesPix p {
        color: white;
    }

    .historico{
        margin-top: 12px;
    }
    .Trasnferencia{

        margin-top: 20px;

        gap: 10px;
        width: 300px;

        display: flex;
                   
    }
    .TrasnferenciaTexto{
        display: flex;
    flex-direction: column;
    justify-content: center;
        
    }

    .TrasnferenciaTexto h3{
        color: #E6E6E6;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 5px;
    }

    .TrasnferenciaTexto p{
        
        color: #E6E6E6;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 5px;
    }

    .TrasnferenciaTexto span{
        color: #ff0000;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 5px;
    }

    .TrasnferenciaMes{

        color: #E6E6E6;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13.3333px;
        line-height: 16px;
        display: flex;
        align-items: center;
    }


    
    
`;