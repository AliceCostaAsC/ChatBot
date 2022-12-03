import React, { useState } from "react";
import { Card } from '../Style/styles';
import { Link } from "react-router-dom";
import Imagem from '../assets/imagem.png';


//Página home, entrada do usuário
const Home = () => {

  //função para pegar o valor do input
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Login efetuado ${name}`);
  }

  return (
    <Card>
      <h1>Seja Bem-Vindo!</h1>
      <h2>Gostaria de acessar o chat da DigiTalk? </h2>
      <img src={Imagem} alt="" width={320} height={280} />
      <li><p>Digite seu nome:</p></li>
      <li><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"></input></li><br></br>
      <button onClick={() => handleSubmit()}> <Link to={"/chat/" + name}>Entrar</Link></button>
    </Card>
    //favor pressionar o botão no centro, pois trata-se de um link com rotas.
  );
};

export default Home;