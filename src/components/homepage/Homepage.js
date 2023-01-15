import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";



const Results = (props) => {
    console.log("props on homepage", props);

    // console.log("props.frontPage", props.frontPage);
    return(
        <section className="results-container row flex-column justify-content-center align-items-center" data-theme={props.theme}>

            {props.frontPage.map((item, i) => {
                // console.log("item", item, "i", i);

                return(
                    <div className="flag col-12 shadow-sm" key={i} data-theme={props.theme}>
                    <img
                        src={item.flags.png}
                    />
                    {/* how do i get the SVG from data?
                        needs to be a fetch?
                    */}
                    <Link
                        data-theme={props.theme}
                        to={item.name.common}
                        onClick={(e) => props.singleResult(item, i)}
                        >
                        <div className="country-info-container" key={i}>
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

export default Results;