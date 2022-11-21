import React from "react";
import "./results.css";

const Results = (props) => {
    console.log("props", props);

    return(

        <section className="results-container row flex-column justify-content-center align-items-center" data-theme={props.theme}>

            {props.apiAll.map((item, i) => {

                return(
                    <div className="flag col-12 " key={i}>
                    <img
                        src={item.flags.png}
                    />
                    {/* how do i get the SVG from data?
                        needs to be a fetch?
                    */}
                    </div>
                )
            })}
            

        </section>


    )
}

export default Results;