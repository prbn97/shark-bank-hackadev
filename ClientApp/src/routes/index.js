import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useAuth from "../hooks/useAuth"

import Acesso from "../pages/Acesso";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Historico from "../pages/Historico";
import Conta from "../pages/Conta";
import RedefinirSenha from "../pages/Redefinir";
import Pix from "../pages/Pix";
import Pix2 from "../pages/Pix2";
import Pix3 from "../pages/Pix3";
import Pix4 from "../pages/Pix4";





const Private = ({ Item }) => {
    const { logado } = useAuth();

    return logado > 0 ? <Item /> : <Acesso />;
};

function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/conta" element={<Private Item={Conta} />} />
                    <Route exact path="/historico" element={<Private Item={Historico} />} />
                    <Route exact path="/pix" element={<Private Item={Pix} />} />
                    <Route exact path="/pix2" element={<Private Item={Pix2} />} />
                    <Route exact path="/pix3" element={<Private Item={Pix3} />} />
                    <Route exact path="/pix4" element={<Private Item={Pix4} />} />


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