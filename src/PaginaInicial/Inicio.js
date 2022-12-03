import React from "react";
import { Link } from "react-router-dom";
import { Botao, Fundo } from '../Style/styles';
import Imagem from "../assets/imagem2.png";

//Página de início
const Inicio = () => {
    return (
        <Fundo>
            <img src={Imagem} alt="" width={580} height={490} />
            <h1>Olá! Seja bem-vindo ao chat da Digitalk</h1>
            <h2>Gostaria de conversar com o nosso Bot?</h2>
            <p>Um projeto oferecido pela empresa digitalk, <br></br>
                onde logo após o login o usuário é direcionado para a página de chat,<br></br>
                e assim será possível ter uma interação com o Bot.
            </p>
            <Botao>
                <Link to="/home">Iniciar</Link>
            </Botao>
        </Fundo>
        //favor pressionar o botão no centro, pois trata-se de um link com rotas.
    );
}
export default Inicio;