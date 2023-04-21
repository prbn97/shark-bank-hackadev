import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.cpf === JSON.Parse(userToken).cpf);

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const acesso = (cpf, senha) => {
        const usersStorage = localStorage.getItem("users_db");

        const hasUser = JSON.parse(usersStorage)?.filter((user) => user.cpf === cpf && user.senha === senha);

        if (hasUser?.legth) {
            if (hasUser[0].cpf === cpf && hasUser[0].senha === senha) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ cpf, token }));
                setUser({ cpf, senha });
                return;
            } else {
                return "CPF ou senha inválidos";
            }
        } else {
            return "Cliente não cadastrado";
        }
    };

    const cadastrado = (cpf, senha) => {
        const usersStorage = localStorage.getItem("users_db");

        const hasUser = JSON.parse(usersStorage)?.filter((user) => user.cpf === cpf);

        if (hasUser?.legth) {
            return "Cliente já cadastrado";
        }

        let novoCliente;

        if (usersStorage) {
            novoCliente = [...usersStorage, { cpf, senha }];
        } else {
            novoCliente = [{ cpf, senha }];
        }

        localStorage.setItem("users_db", JSON.stringify(novoCliente));
    };

    const sair = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider value={{ user, signed: !!user, acesso, cadastrado, sair }}>
            {children}
        </AuthContext.Provider>
    );
};
