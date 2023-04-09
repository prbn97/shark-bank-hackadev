import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_AZUL_BEBE};
        color: ${({ theme }) => theme.COLORS.COR_PADRAO_DA_FONTE};
        
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        outline: nome;
        color: ${({ theme }) => theme.COLORS.COR_PADRAO_DA_FONTE};

        display: flex;
        flex-direction: column;
        align-items: center;
    
    }

    a {
        text-decoration: none;
    }

    button, a   {
        cursor: pointer;
        transition: filter 0.2s;
    }
    
    button:hover , a:hover   {
        filter: brightness(0.9);
    }    
`;