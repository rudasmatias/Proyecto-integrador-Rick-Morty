import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Nav from "./components/Nav/Nav";
import Detail from "./pages/Detail/Detail";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [charId, setCharId] = useState([]);
  const { pathname } = useLocation(); // {,,}
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = "ronaldmatiasrudas@gmail.com";
  const PASSWORD = "hola1234";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    if (charId.includes(parseInt(id))) {
      return window.alert("Ya Existe!");
    }
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setCharId([...charId, data.id]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((personajes) => personajes.id !== parseInt(id))
    );
    setCharId(charId.filter((id) => id !== parseInt(id)));
  };

  const reset = (event) => {
    setCharacters([]);
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Home characters={characters} onClose={onClose} reset={reset} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
