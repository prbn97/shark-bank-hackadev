import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --azul-bebe: #1B85C3;
        --cinza-escuro: #D9D9D9;
        --white: #FFFFFF;
        --azul-marinho: #111B59;
        --azul-marinho-escuro: #101626
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: var(--azul-bebe);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        
        outline: nome;
        color: var(--azul-marinho-escuro);

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

export default GlobalStyle;