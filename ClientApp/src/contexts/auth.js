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
    const cadastra = (cpf, nomeCompleto, email, celular, senha) => {

        const clientesStorage = localStorage.getItem("clientes_db");

        const temCliente = JSON.parse(clientesStorage)?.filter((cliente) => cliente.cpf === cpf);

        if (temCliente?.length) {
            return "Cliente já cadastrado";
        }

        let novoCliente;

        if (clientesStorage) {
            novoCliente = [...clientesStorage, { cpf, nomeCompleto, email, celular, senha }];
        } else {
            novoCliente = [{ cpf, nomeCompleto, email, celular, senha }];
        }

        localStorage.setItem("clientes_db", JSON.stringify(novoCliente));
        return;

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