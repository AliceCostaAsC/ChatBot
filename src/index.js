
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Router.js";
import Inicio from "./PaginaInicial/Inicio";
import Home from "./EntradaUser/Home";
import Chat from "./ChatBot/Chat";

//pagina de rotas
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />}>
          <Route index element={<Inicio />} />
          <Route path="home" element={<Home />} />
          <Route path="chat" element={ <Chat />} />
          <Route path="chat/:name" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
