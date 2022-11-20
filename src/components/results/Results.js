import React from "react";
import fetchAll from "../helpers/fetchAll";
import "./results.css";

const fetchData = fetchAll();

const Results = (props) => {
    console.log("props", props);
    const data = fetchData.read;
    console.log("data", data);

    return(

        <section className="results-container" data-theme={props.theme}>

            <div className="flag">
                {/* <img
                src={data[0].flags.png}
                // src={props.apiAll[0].flags.png}
                />
                {/* how do i get the SVG from data?
                    needs to be a fetch?
                */}
            </div>

        </section>

    )
}

export default Results;