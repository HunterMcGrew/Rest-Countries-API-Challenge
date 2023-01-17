
import "./singlepage.css";


const SinglePage = (props) => {
    // console.log("props on SinglePage", props);

    // console.log("props.frontPage", props.frontPage);

    let languagesObj = Object.values(props.singlePage.languages);
    // let languages = [];
    let borders;
    // if borders doesn't exist, we won't populate anything
    if (props.singlePage.borders) borders = props.singlePage.borders;
    // toLocaleString() to avoid child cannot be obj error
    // languagesObj.map(item => languages.push(item.toLocaleString()));


    // country may not always have a border...
    // maybe an if statement up here if it exists
    // runs a function that will then return proper HTML?

    // languages returns fine when called Object.values()
    // but there is no ", " in between the languages...
    // commas aren't the hard part, the spaces are

    // function to populate if there is a border or not
    const borderDisplay = () =>  {
        // will need a way to go over certain level of the api obj
        // and match their abbr with the real obj to get data
        if (!borders) {
            return;
        } else {
            return(

                <div className="border-countries">
                    <span className="country-info-title">
                            Border Countires:{" "}
                    </span>
                    {borders.map((item, i) => {
                        // console.log(item);
                        return (
                            <span className="country-sub-region country-info" key={item}>
                                {item}
                            </span>

                        )
                    })}
                    
                    
                </div>

            )
        }
    }

    return(
        <section className="results-container row flex-column justify-content-center align-items-center" 
        data-theme={props.theme}
        key={props.singlePage.name.common}>

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

                <p className="country-domain country-info">
                    <span className="country-info-title">
                        Top Level Domain:{" "}
                    </span>
                    {props.singlePage.tld[0]}
                </p>
                <p className="country-currencies country-info">
                    <span className="country-info-title">
                        Currencies:{" "}
                    </span>
                    {Object.values(props.singlePage.currencies)[0].name}
                </p>
                <p className="country-languages country-info">
                    <span className="country-info-title">
                        Languages:{" "}
                    </span>
                    {Object.values(props.singlePage.languages).map((lang) => {
                        // console.log(lang);
                        return (
                            <span className="country-sub-region country-info" key={lang}>
                                {lang}
                            </span>
                           )
                        })}
                </p>

                <br/>
                <br/>

                {/* calling this function to see what needs to be returned */}
                {borderDisplay()}
                {/* <div className="border-countries">
                    <span className="country-info-title">
                            Border Countires:{" "}
                    </span>
                    {borders.map((item, i) => {
                        console.log(item);
                        return (
                            <span className="country-sub-region country-info">
                                {item}
                            </span>

                        )
                    })}
                    
                    
                </div> */}
            </div>

        </div>

        </section>


    )
}

export default SinglePage;