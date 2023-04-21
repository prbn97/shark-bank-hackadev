import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Acesso from "../pages/Acesso";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Historico from "../pages/Historico";
import Conta from "../pages/Conta";
import RedefinirSenha from "../pages/Redefinir";
import Pix from "../pages/Pix";

const Private = ({ Item }) => {
    // const token = localStorage.getItem("token");
    const token = false;

    return token > 0 ? <Item /> : <Acesso />;
};

function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/conta" element={<Private Item={Conta} />} />
                    <Route exact path="/historico" element={<Private Item={Historico} />} />
                    <Route exact path="/pix" element={<Private Item={Pix} />} />


                    <Route exact path="/home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />

                    <Route path="/redefinir" element={<RedefinirSenha />} />
                    <Route path="*" element={<Acesso />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp