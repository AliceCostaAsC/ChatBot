import styled from "styled-components";
//style do site

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 415px;
  width: 600px;
  border-radius: 5px;
  display: "flex";
  margin-left: 35%;
  margin-top: 10%;

  container {
    padding: 2px 16px;
  }

  img {
    margin-right: 30%;
  }
  h2 {
    margin-top: 2%;
    margin-left: 27%;
    font-size: 16px;
    color: gray;
  }
  p {
    font-size: 15px;
    color: gray;
  }
  h1 {
    color: #AA00F5;
    font-size: 30px;
    font-weight: bold;
    font-family: "-apple-system";
    margin-left: 30%;
  }
  input {
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    box-shadow: 1px 1px 2px #333333;
    -moz-box-shadow: 1px 1px 2px #333333;
    -webkit-box-shadow: 1px 1px 2px #333333;
    background: #f4f4f4;
    border: 1px solid #000000;
    width: 210px;
    height: 35px;
    border-color: white;
    margin-left: 55%;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 17px;
  }
  li {
    list-style: none;
  }
  li p {
    margin-top: -33%;
    margin-left: 55%;
  }
  button {
    background-image: linear-gradient(to bottom right, #6a5acd , #AA00F5);
    border-color: rgb(103, 104, 156);
    border-radius: 5px;
    width: 216px;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin-left: 55%;
  }
`;

export const Robo = styled.div`
  margin-left: 42%;
  margin-top: -33%;
  p{
    color: #6a5acd;
  }
  h3 {
    color: white;
  }
`;

export const Botao = styled.button`
background-image: linear-gradient(to bottom right, #6a5acd , #AA00F5);
    border-color: rgb(103, 104, 156);
    border-radius: 5px;
    width: 216px;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin-left: 48%;
    margin-top: 2%;

    a {
      text-decoration: none;
      color: white;
      font-size: 17px;
    }
    li {
      list-style: none;
    }
`
export const Fundo = styled.div`
    margin-top: 8%;
    margin-left: 12%;

      p{
        margin-left: 48%;
        color: gray;
      }
      h1{
        color: gray;
        margin-left: 48%;
        margin-top: -32%;
      }
      h2 {
        margin-left: 48%;
        color: #6a5acd;
      }
    `
export const Div = styled.div`
    margin-top: 8%;
    margin-left: 18%;

    img {
      margin-top: 2%;
      margin-left: 8%;
    }
    p {
      margin-left: 5%;
      color: #6a5acd;
      font-weight: bold;
    }
    h1 {
      color: gray;
      font-size: 28px;
      margin-left: 5%;
    }
    `
export const Image2 = styled.div`
    margin-left: 60%;
    margin-top: -30%;
    `
