import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./regions.css";



const Regions = (props) => {
    // console.log("props on regions", props);

        return(

            <section className="results-container row flex-column justify-content-center align-items-center" data-theme={props.theme}>
    
                {props.filtered.map((item) => {
                    // console.log("item", item, item.name.common);
    
                    return(
                        <div className="flag col-12 shadow-sm" key={item.name.common} data-theme={props.theme}>
                        <img
                            src={item.flags.png}
                        />
                        {/* how do i get the SVG from data?
                            needs to be a fetch?
                        */}
                        <Link
                            data-theme={props.theme}
                            onClick={(e) => props.singleResult(item)}
                            to={item.name.common}
                            >
                            <div className="country-info-container">
                                <p className="country-name country-info" id="country-name">
                                    
                                        {item.name.common}
                                    
                                </p>
                                <p className="country-population country-info">
                                    {/* need to format the population number to have commas */}
                                    <span className="country-info-title">
                                        Population:{' '}
                                    </span>
                                        {item.population.toLocaleString("en-US")}
                                </p>
                                <p className="country-region country-info">
                                    <span className="country-info-title">
                                        Region:{' '}
                                    </span>
                                    {item.region}
                                </p>
                                <p className="country-capital country-info">
                                    <span className="country-info-title">
                                        Capital:{' '}
                                    </span>
                                    {item.capital}
                                </p>
                            </div>
                        </Link>
                        </div>
                    )
                })}
                
    
            </section>
    
    
        )
    
}

export default Regions;