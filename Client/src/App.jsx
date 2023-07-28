import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { backgroundImage } from "./App.module.css";

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

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const query = `?email=${email}&password=${password}`;
      const { data } = await axios(URL + query);
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      return { error: error.message };
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    try {
      if (charId.includes(id)) {
        return window.alert("Ya Existe!");
      }
      const url = `http://localhost:3001/rickandmorty/character/${id}`;
      const { data } = await axios(url);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
        setCharId([...charId, data.id]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      return { error: error.message };
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((personajes) => Number(personajes.id) !== parseInt(id))
    );
    setCharId(charId.filter((id) => id !== id));
  };

  return (
    <div className={backgroundImage}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
