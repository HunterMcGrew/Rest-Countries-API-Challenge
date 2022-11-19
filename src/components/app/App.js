import React from 'react';
import './App.css';
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
// components
import Header from "../header/Header";
import Search from "../search/Search";
import Results from '../results/Results';

function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
  const [savedApi, setSavedApi] = useLocalStorage("apiCache", );
  const [apiAll, setApiAll] = useState();

  console.log("apiAll", apiAll);
  console.log("savedApi", savedApi);

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  const fetchAll = async () => {
    try {
      let data = await fetch(`https://restcountries.com/v3.1/all`);
      let response = await data.json();
      // console.log("response", response);
      setApiAll(response);
      setSavedApi(response);
    } catch (err) {
      if (err) throw err;
    }
  }

  if (!savedApi) fetchAll();
  if (savedApi && !apiAll) setApiAll(savedApi);

  return (
    <section className="App" data-theme={theme}>
        <Header
          theme={theme}
          switchTheme={switchTheme}
        />
      <section className="body-container" data-theme={theme}>
        <Search
          theme={theme}
        />
        <Results
          theme={theme}
          apiAll={apiAll}
        />
      </section>
    </section>
  );
}

export default App;
