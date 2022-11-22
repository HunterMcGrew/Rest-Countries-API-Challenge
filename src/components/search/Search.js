import React from "react";
import "./Search.css";
import 'material-symbols';

function Search(props) {
    
    return(

        <section className="search-container d-flex justify-content-center">
            <section className="input-container row shadow-sm align-items-center rounded-1" data-theme={props.theme}>
                
                <div className="input-group d-flex align-items-center">
                    <span className="input-group-text" id="basic-addon1" data-theme={props.theme}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" data-theme={props.theme}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                        </svg>
                    </span>
                    <input type="text" className="form-control" placeholder="Search for a country..." aria-label="Search for a country..." aria-describedby="basic-addon1" data-theme={props.theme}></input>
                </div>

                <section className="filter-container d-flex justify-content-between" data-theme={props.theme}>
                    {/* according to the design, i think i need to make it with css / js */}
                        <select class="form-select" aria-label="Default select example" data-theme={props.theme}>
                            <option selected>Filter by Region
                            <span class="material-symbols-outlined expand-icon" 
                            data-theme={props.theme}>
                                expand_more
                            </span>
                            </option>
                            <option value="Africa">Africa</option>
                            <option value="America">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>

		        </section>
            </section>
        </section>
    )

};

export default Search;