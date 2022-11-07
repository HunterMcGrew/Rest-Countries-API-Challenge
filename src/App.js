import React from 'react';
import './App.css';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
// components
import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Header
        theme={theme}
        switchTheme={switchTheme}
      />
      <Search
        theme={theme}
      />
    </div>
  );
}

export default App;
