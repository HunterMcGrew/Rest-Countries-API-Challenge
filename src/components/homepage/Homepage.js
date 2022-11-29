import React from "react";
import "./homepage.css";

const Results = (props) => {
    console.log("props", props);

    console.log("props.frontPage", props.frontPage);
    return(
        <section className="results-container row flex-column justify-content-center align-items-center" data-theme={props.theme}>

            {props.frontPage.map((item, i) => {

                return(
                    <div className="flag col-12 " key={i} data-theme={props.theme}>
                    <img
                        src={item.flags.png}
                    />
                    {/* how do i get the SVG from data?
                        needs to be a fetch?
                    */}
                        <div className="country-info-container">
                            <p className="country-name country-info" id="country-name">
                                {item.name.common}
                            </p>
                            <p className="country-population country-info">
                                {/* need to format the population number to have commas */}
                                <span className="country-info-title">
                                    Population:{' '}
                                </span>
                                    {item.population}
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
                    </div>
                )
            })}
            

        </section>


    )
}

export default Results;