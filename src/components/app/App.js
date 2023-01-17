import React, { Suspense, lazy } from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from 'axios';
// components
import Header from "../header/Header";
import Loading from "../loading/Loading";
const Homepage = lazy(() => import("../homepage/Homepage.js"));
const Search = lazy(() => import("../search/Search"));
const SinglePage = lazy(() => import("../singlePage/SingePage"));
const Regions = lazy(() => import ("../regions/Regions"));


function App() {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
  // all the api data from first page render
  const [apiAll, setApiAll] = useState([]);
  const [frontPage, setFrontPage] = useState(() => {
    const saved = localStorage.getItem("frontpage");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  })
  const [regionFilter, setRegionFilter] = useState("");
  const [singlePage, setSinglePage] = useState();
  const [filtered, setFiltered] = useState();
  
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  // axios use effect
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log("response", response);
        let data = response.data;
        setApiAll(data);

      } catch (err) {
        console.error(err);
      }
    }

    getData();
  

  }, []);

  useEffect(() => {

    let tempFrontPageArr = [];
    // console.log("apiAll before map", apiAll);
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

  }, [apiAll]);

  // const test = () => {
  //   console.log("is test running?");
  //   console.log("apiAll in test", apiAll);
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
  //   setFrontPage(tempFrontPageArr);
  //   localStorage.setItem("frontpage", JSON.stringify(tempFrontPageArr));
  // }

  // when regionFilter state is changed, filter apiAll for that region
  useEffect(() => {
    if(!regionFilter) {
      return;
    } else {
      let regionArr = [];
      apiAll.map((country) => {
        if (country.region == regionFilter) {
        regionArr.push(country);
        }
        setFiltered(regionArr);
      })
    }

  }, [regionFilter])

  // function to grab a single country obj from the api data
  const singleResult = (item, i) => {
    // console.log("item2", item, "i2", i);
    setSinglePage(item);
} 


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
          <Route
            path="/Africa"
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
                <Regions
                  theme={theme}
                  filtered={filtered}
                  regionFilter={regionFilter}
                  singleResult={singleResult}
                />
              </Suspense>
            </>}
          />
          <Route
            path="/Americas"
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
              <Regions
                  theme={theme}
                  filtered={filtered}
                  regionFilter={regionFilter}
                  singleResult={singleResult}
                />
              </Suspense>
            </>}
          />
          <Route
            path="/Asia"
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
                <Regions
                  theme={theme}
                  filtered={filtered}
                  regionFilter={regionFilter}
                  singleResult={singleResult}
                />
              </Suspense>
            </>}
          />
          <Route
            path="/Europe"
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
                <Regions
                  theme={theme}
                  filtered={filtered}
                  regionFilter={regionFilter}
                  singleResult={singleResult}
                />
              </Suspense>
            </>}
          />
          <Route
            path="/Oceania"
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
                <Regions
                  theme={theme}
                  filtered={filtered}
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


export default App;
