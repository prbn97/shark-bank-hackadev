import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [cliente, setCliente] = useState();

    useEffect(() => {

        const clienteToken = localStorage.getItem("cliente_token");

        const clientesStorage = localStorage.getItem("clientes_db");

        if (clienteToken && clientesStorage) {

            const temCliente = JSON.parse(clientesStorage)?.filter(
                (cliente) => cliente.cpf === JSON.parse(clienteToken).cpf);

            if (temCliente) setCliente(temCliente[0]);
        }
    }, []);

    const acessa = (cpf, senha) => {
        const clientesStorage = localStorage.getItem("clientes_db");

        const temCliente = JSON.parse(clientesStorage)?.filter((cliente) => cliente.cpf === cpf && cliente.senha === senha);

        if (temCliente?.length) {
            if (temCliente[0].cpf === cpf && temCliente[0].senha === senha) {

                const clienteToken = Math.random().toString(36).substring(2);
                localStorage.setItem("cliente_token", JSON.stringify({ cpf, token: clienteToken }));
                setCliente({ cpf, senha });
                return;
            } else {
                return "CPF ou senha inválidos";
            }
        } else {
            return "Cliente não cadastrado";
        }
    };

    //cpf, nomeCompleto, email, celular, senha
    const cadastra = async (cpf, nomeCompleto, email, celular, senha) => {
        let clienteToken;
        do {
            clienteToken = Math.random().toString(36).substring(7);
        } while (clienteToken.length < 5);
        console.log(clienteToken)

        const cliente = {
            id: clienteToken,
            nomeCliente: nomeCompleto,
            emailCliente: email,
            celularCliente: celular,
            ativoCliente: true
        };

        const acesso = {
            id: clienteToken + id,
            clienteId: clienteToken,
            cpfAcesso: cpf,
            senhaAcesso: senha,
        }

        const responseCliente = await fetch('https://localhost:7201/api/Cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });   

        if (!responseCliente.ok) {
            return 'Ocorreu um erro ao realizar o cadastro';
        }

        const responseAcesso = await fetch('https://localhost:7201/api/Acesso', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(acesso)
        });

        if (!responseAcesso.ok) {
            return 'Ocorreu um erro ao realizar o cadastro';
        }

    };

    const sair = () => {
        setCliente(null);
        localStorage.removeItem("cliente_token");
    };

    return (
        <AuthContext.Provider value={{ cliente, logado: !!cliente, acessa, cadastra, sair }}>
            {children}
        </AuthContext.Provider>
    );
};