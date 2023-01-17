import React, { Suspense, lazy } from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from 'axios';
// components
import Header from "../header/Header";
// import Search from "../search/Search";
import Loading from "../loading/Loading";
const Homepage = lazy(() => import("../homepage/Homepage.js"));
const Search = lazy(() => import("../search/Search"));
const SinglePage = lazy(() => import("../singlePage/SingePage"));
// const Results = lazy(() => import("../results/Results.js"));


function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
  // const [savedApi, setSavedApi] = useLocalStorage("apiCache", );
  // all the api data from first page render
  const [apiAll, setApiAll] = useState([]);
  const [frontPage, setFrontPage] = useState(() => {
    const saved = localStorage.getItem("frontpage");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })
  const [regionFilter, setRegionFilter] = useState();
  const [singlePage, setSinglePage] = useState();
  const [filtered, setFiltered] = useState();

  console.log("regionFilter", regionFilter);

  // how to keep state data thereeee
  
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }
  // old fetch w/o axios
  // const fetchAll = async () => {
  //   try {
  //     let data = await fetch(`https://restcountries.com/v3.1/all`);
  //     let response = await data.json();
  //     // console.log("response", response);
  //     setApiAll(response);
  //     setSavedApi(response);
  //     frontPageFilter(response);
  //   } catch (err) {
  //     if (err) throw err;
  //   }
  // }

  // axios use effect
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(res => setApiAll(res.data));

    if (frontPage.length == 0) {
    // filter through all countries to grab a few for the home page
    let tempFrontPageArr = [];
    apiAll.map((item) => {
      if (item.name.common === "Germany" || 
          item.name.common === "United States of America" ||
          item.name.common === "Brazil" ||
          item.name.common === "Sweden" ||
          item.name.common === "Ireland" ||
          item.name.common === "Japan" ||
          item.name.common === "China" ||
          item.name.common === "Australia"
          ) {
        tempFrontPageArr.push(item);
      }
    }) 
    // console.log("tempArr", tempFrontPageArr);
    setFrontPage(tempFrontPageArr);
    localStorage.setItem("frontpage", JSON.stringify(tempFrontPageArr));
  }
  }, []);
  

  // threw this into the useEffect axios hook
  // const frontPageFilter = () => {
  //   // filter through all countries to grab a few for the home page
  //   let tempFrontPageArr = [];
  //   apiAll.map((item) => {
  //     if (item.name.common === "Germany" || 
  //         item.name.common === "United States of America" ||
  //         item.name.common === "Brazil" ||
  //         item.name.common === "Sweden" ||
  //         item.name.common === "Ireland" ||
  //         item.name.common === "Japan" ||
  //         item.name.common === "China" ||
  //         item.name.common === "Australia"
  //         ) {
  //       tempFrontPageArr.push(item);
  //     }
  //   }) 
  //   // console.log("tempArr", tempFrontPageArr);
  //   setFrontPage(tempFrontPageArr);
  // }

  // Will probably need to come back to this logic and make sure
  // it's what i want ******
  // if (!savedApi) fetchAll();
  // if (savedApi && !apiAll) setApiAll(savedApi);
  
  console.log("apiAll", apiAll); 
  // console.log("savedApi", savedApi);
  console.log("frontpage", frontPage);

  // function to grab a single country obj from the api data
  const singleResult = (item, i) => {
    console.log("item2", item, "i2", i);
    setSinglePage(item);
}

  // console.log("savedApi", savedApi);
  console.log("filtered", filtered);
  console.log("regionFilter on app", regionFilter);

  


  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<>
              <Header 
                theme={theme}
                switchTheme={switchTheme}
              />
              <Suspense fallback={<Loading />}>
                <Search 
                  theme={theme}
                  setRegionFilter={setRegionFilter}
                  setFiltered={setFiltered}
                  regionFilter={regionFilter}
                />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <Homepage
                  theme={theme}
                  frontPage={frontPage}
                  regionFilter={regionFilter}
                  singleResult={singleResult}
                />
              </Suspense>
            </>}
          />
          {/* 404 Route for the future */}
          <Route
            path="*"
            element={<>
              <Header
                theme={theme}
                switchTheme={switchTheme}
              />
              <Suspense fallback={<Loading />}>
                <Search 
                  theme={theme}
                  setRegionFilter={setRegionFilter}
                  regionFilter={regionFilter}
                  setFiltered={setFiltered}

                />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <SinglePage
                  theme={theme}
                  singlePage={singlePage}
                />
              </Suspense>
            </>}
          />
        </Routes>
      </Router>
    </div>
  );
}

// old shit, never know if you'll need it

{/* <section className="App" data-theme={theme}>
                <Header
                  theme={theme}
                  switchTheme={switchTheme}
                />
              <section className="body-container" data-theme={theme}>
                <Search
                  theme={theme}
                  setRegionFilter={setRegionFilter}
                />
                <Suspense fallback={<Loading />}>
                  <Homepage
                    theme={theme}
                    frontPage={frontPage}
                  />
                </Suspense> */}
                {/* <Suspense fallback={<Loading />}>
                  <Results
                    theme={theme}
                    savedApi={savedApi}
                    apiAll={apiAll}
                  />
                </Suspense> */}
              {/* </section>
            </section> */}

export default App;
