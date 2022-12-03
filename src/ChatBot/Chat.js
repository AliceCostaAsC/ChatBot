import React, { useState, useRef, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Div, Robo } from '../Style/styles';
import Imagem3 from "../assets/balloon.png";
import { useParams } from "react-router-dom";

//Página do chat
const Chat = () => {

  const { name } = useParams();
  // estilização do Chat
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#6a5acd",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#f4f4f4",
    botBubbleWidth: "400px",
    botFontColor: "black",
    userBubbleColor: "#6a5acd",
    userFontColor: "#fff",
  };

  // Array com as conversas setadas do Chat
  const steps = [
    {
      id: "Greet",
      message: "Olá, seja bem-vindo ao nosso website!",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Por favor, digite seu nome",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hey {previousValue}, adivinha",
      trigger: "issues",
    },
    {
      id: 'issues',
      message: 'Em qual número eu estou pensando?',
      trigger: 'resp',
    },
    {
      id: 'resp',
      options: [
        { value: 1, label: 'Número 1', trigger: 'resp1' },
        { value: 2, label: 'Número 2', trigger: 'resp2' },
        { value: 3, label: 'Número 3', trigger: 'resp2' },
      ],
    },
    {
      id: 'resp2',
      message: 'Resposta errada, tente de novo.',
      trigger: 'resp',
    },
    {
      id: 'resp1',
      message: 'Incrível! você é um telepata!',
      end: true,
    },

  ];

  // Cronômetro
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // atualizar o timer
      // adicionar '0' no começo da variável
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
    //quando der 1 minuto:
    if (total == 120000) {
      alert(`${name}, você enviou [] mensagens.`);
    }
    //quando der 3 minutos.
    if (total == 0) {
      alert("Sessão encerrada, ok para sair");
      window.location = "/";
    }
  };

  const clearTimer = (e) => {
    setTimer("00:03:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  //Dar um get no timer
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 180);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  //Resetar o timer
  // const onClickReset = () => {
  //   clearTimer(getDeadTime());
  // };



  return (
    <Div>
      <h1>Obrigado pela preferência!</h1>
      <p>Conheça o ChatBot da Digitalk, e interaja com ele.</p>
      <img src={Imagem3} alt="" width={250} height={250} />
      <Robo>
        <ThemeProvider theme={theme}>
        <h3>{timer}</h3>
          <div><ChatBot steps={steps} />;</div>
        </ThemeProvider>
      </Robo>
    </Div>

  );
};

export default Chat;
