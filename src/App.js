import React from 'react';
import './App.css';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
// components
import Header from "./components/header/Header";

function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");


  return (
    <div className="App">
      <Header
        theme={theme}
      />
    </div>
  );
}

export default App;
