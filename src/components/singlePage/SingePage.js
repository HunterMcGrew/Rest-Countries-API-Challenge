



const SinglePage = (props) => {
    console.log("props on SinglePage", props);

    // console.log("props.frontPage", props.frontPage);
    return(
        <section className="results-container row flex-column justify-content-center align-items-center" data-theme={props.theme}>

        <div className="flag col-12 shadow-sm" data-theme={props.theme}>
        <img
            src={props.singlePage.flags.png}
        />
            <div className="country-info-container">
                <p className="country-name country-info" id="country-name">
                    
                        {props.singlePage.name.common}
                    
                </p>
                <p className="country-population country-info">
                    {/* need to format the population number to have commas */}
                    <span className="country-info-title">
                        Population:{" "}
                    </span>
                        {props.singlePage.population.toLocaleString("en-US")}
                </p>
                <p className="country-region country-info">
                    <span className="country-info-title">
                        Region:{" "}
                    </span>
                    {props.singlePage.region}
                </p>
                <p className="country-sub-region country-info">
                    <span className="country-info-title">
                        Sub Region:{" "}
                    </span>
                    {props.singlePage.subregion}
                </p>
                <p className="country-capital country-info">
                    <span className="country-info-title">
                        Capital:{" "}
                    </span>
                    {props.singlePage.capital}
                </p>

                <br/>
                <br/>

                <p className="country-sub-region country-info">
                    <span className="country-info-title">
                        Top Level Domain:{" "}
                    </span>
                    {props.singlePage.tld[0]}
                </p>
                <p className="country-sub-region country-info">
                    <span className="country-info-title">
                        Currencies:{" "}
                    </span>
                    {props.singlePage.currencies.SEK.name}
                </p>
                <p className="country-sub-region country-info">
                    <span className="country-info-title">
                        Languages:{" "}
                    </span>
                    {props.singlePage.languages.swe}
                </p>

                <br/>
                <br/>

                <p className="country-sub-region country-info">
                    <span className="country-info-title">
                        {/* Sub Region:{" "} */}
                    </span>
                    {/* {props.singlePage.subregion} */}
                </p>
            </div>

        </div>

        </section>


    )
}

export default SinglePage;