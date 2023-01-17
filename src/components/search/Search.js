import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import 'material-symbols';

function Search(props) {
    // console.log("search props", props);
    // state to hold dropdown Element
    const [dropDownEl, setDropDownEl] = useState();
    
    // grabs the element from ref
    const dropDown = useRef();
    // console.log("dropDown", dropDown);

    // throws the element in state for persistency 
    useEffect(() => {
        setDropDownEl(dropDown.current);
    }, []);


    // handles opening and closing menu
    const checkMenu = () => {
        if (dropDownEl.style.display === "block") {
            dropDownEl.style.display = "none";
        } else {
            dropDownEl.style.display = "block";
        }
    }

    // function to grab the value of selected menu item
    const handleSelection = (e) => {
        // console.log(e.target.textContent);
        let selection = e.target.textContent;
        props.setRegionFilter(selection);
        checkMenu();
        // searchFilter();
    }
    
    return(

        <div className="search-wrapper">
            <section className="search-container justify-content-center">
                <section className="input-container row shadow-sm align-items-center rounded-1" data-theme={props.theme}>
                    
                    <div className="input-group col-10 align-items-center ">
                        <span className="input-group-text" id="basic-addon1" data-theme={props.theme}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="icon icon-tabler icon-tabler-search" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                data-theme={props.theme}
                                >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="10" cy="10" r="7"></circle>
                            <line x1="21" y1="21" x2="15" y2="15"></line>
                            </svg>
                        </span>
                        <input type="text" className="form-control" placeholder="Search for a country..." aria-label="Search for a country..." aria-describedby="basic-addon1" data-theme={props.theme}></input>
                    </div>

                    {/* desktop filter-container 
                    do I even need this? seems like the mobile is doing all the work
                    */}
                    <section className="filter-container-desktop col-2 d-flex justify-content-end" data-theme={props.theme}>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="filter-text" data-theme={props.theme}>
                                Filter by Region
                            </span>
                            <span className="material-symbols-outlined expand-icon" 
                                data-theme={props.theme}>
                                    expand_more
                                </span>
                            </div>
                            <div className="region-container-desktop">
                                <div className="region-selector" value="Africa">Africa</div>
                                <div className="region-selector" value="America">America</div>
                                <div className="region-selector" value="Asia">Asia</div>
                                <div className="region-selector" value="Europe">Europe</div>
                                <div className="region-selector" value="Oceania">Oceania</div>
                            </div>
                    </section>
                </section>
            </section>

            {/* mobile filter menu */}
            <section className="filter-container rounded-2 shadow-sm" data-theme={props.theme}>
                <div className="filter-text-container d-flex align-items-center justify-content-between" onClick={checkMenu}>
                    <span className="filter-text" data-theme={props.theme}>
                        Filter by Region
                    </span>
                    <span className="material-symbols-outlined expand-icon" 
                        data-theme={props.theme}>
                            expand_more
                    </span>
                </div>
                <div className="region-container rounded-2 shadow-sm" data-theme={props.theme} ref={dropDown}>
                    <ul className="region-ul">
                        
                        <Link to="/Africa" data-theme={props.theme}>
                            <li className="region-selector" 
                                value="Africa"
                                data-theme={props.theme}
                                onClick={((e) => handleSelection(e))}>
                                    Africa
                            </li>
                        </Link>
                        <Link to="/Americas" data-theme={props.theme}>
                            <li className="region-selector" 
                                value="Americas"
                                data-theme={props.theme}
                                onClick={((e) => handleSelection(e))}>
                                    Americas
                            </li>
                        </Link>
                        <Link to="/Asia" data-theme={props.theme}>
                            <li className="region-selector" 
                                value="Asia"
                                data-theme={props.theme}
                                onClick={((e) => handleSelection(e))}>
                                    Asia
                            </li>
                        </Link>
                        <Link to="/Europe" data-theme={props.theme}>
                            <li className="region-selector" 
                                value="Europe"
                                data-theme={props.theme}
                                onClick={((e) => handleSelection(e))}>
                                    Europe
                            </li>
                        </Link>
                        <Link to="/Oceania" data-theme={props.theme}>
                            <li className="region-selector" 
                                value="Oceania"
                                data-theme={props.theme}
                                onClick={((e) => handleSelection(e))}>
                                    Oceania
                            </li>
                        </Link>
                    </ul>
                </div>
            </section>
        </div>
    )

};

export default Search;