import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [cliente, setCliente] = useState();

    useEffect(() => {
        const clienteToken = localStorage.getItem("cliente_token");
        const clientesStorage = localStorage.getItem("clientes_db");

        if (clienteToken && clientesStorage) {
            const temCliente = JSON.parse(clientesStorage)?.filter(
                (user) => user.cpf === JSON.Parse(clienteToken).cpf);

            if (temCliente) setCliente(temCliente[0]);
        }
    }, []);

    const acesso = (cpf, senha) => {
        const clientesStorage = localStorage.getItem("clientes_db");

        const temCliente = JSON.parse(clientesStorage)?.filter((user) => user.cpf === cpf && user.senha === senha);

        if (temCliente?.legth) {
            if (temCliente[0].cpf === cpf && temCliente[0].senha === senha) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("cliente", JSON.stringify({ cpf, token }));
                setCliente({ cpf, senha });
                return;
            } else {
                return "CPF ou senha inválidos";
            }
        } else {
            return "Cliente não cadastrado";
        }
    };

    const cadastrado = (cpf, senha) => {
        const clientesStorage = localStorage.getItem("clientes_db");

        const temCliente = JSON.parse(clientesStorage)?.filter((user) => user.cpf === cpf);

        if (temCliente?.legth) {
            return "Cliente já cadastrado";
        }

        let novoCliente;

        if (clientesStorage) {
            novoCliente = [...clientesStorage, { cpf, senha }];
        } else {
            novoCliente = [{ cpf, senha }];
        }

        localStorage.setItem("clientes_db", JSON.stringify(novoCliente));
    };

    const sair = () => {
        setCliente(null);
        localStorage.removeItem("cliente");
    };

    return (
        <AuthContext.Provider value={{ cliente, logado: !!cliente, acesso, cadastrado, sair }}>
            {children}
        </AuthContext.Provider>
    );
};
