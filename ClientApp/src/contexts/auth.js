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

    const acessa = async (cpf, senha) => {

        const hashAuth = criptoHash(cpf + senha);

        const responseAuth = await fetch(`https://localhost:7201/api/Acesso/Auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: hashAuth })
        });

        console.log(responseAuth);
        console.log(hashAuth);

        alert("Fez o post via Auth");

        if (responseAuth.ok) {
            const responseToken = await fetch(`https://localhost:7201/api/Cliente/Token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: hashAuth })
            });

            alert("Fez o post via Token");

            if (responseToken.ok) {

                console.log(responseToken);

                alert("Fez o post via Token e deu ok");

                alert(cliente);

                if (cliente == undefined) {
                    const clienteToken = criptoHash(cpf);

                    localStorage.setItem("cliente_token", JSON.stringify({ token: clienteToken }));
                    setCliente(cpf, senha);

                    return responseToken.status;
                } else {
                    return responseToken.status;
                }
            } else {
                return responseToken.status;
            }
        } else {
            alert("Não fez o post via Auth");
            return responseAuth.status;
        };
    };
    //cpf, nomeCompleto, email, celular, senha
    const cadastra = async (cpf, nomeCompleto, email, celular, senha) => {

        const clienteHash = criptoHash(nomeCompleto + cpf);

        const cliente = {
            id: clienteHash,
            clienteCpf: cpf,
            clienteNome: email,
            clienteEmail: celular,
            clienteCelular: celular,
            clienteAtivo: true
        };

        const hashAcesso = criptoHash(cpf + senha);

        const acesso = {
            id: hashAcesso,
            acessoHashCliente: clienteHash,
            cliente: null
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

    function criptoHash(string) {
        const CryptoJS = require("crypto-js");
        return CryptoJS.SHA256(string).toString(CryptoJS.enc.Hex);
    }

};



