import React from "react";
import "./results.css";

const Results = (props) => {
    console.log("props", props);

    return(

        <section className="results-container" data-theme={props.theme}>

            <div className="flag">
                <img
                src={props.apiAll[0].flags.png}
                />
                {/* how do i get the SVG from data?
                    needs to be a fetch?
                */}
            </div>

        </section>

    )
}

export default Results;