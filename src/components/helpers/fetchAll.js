import wrapPromise from "./wrapPromise";

const fetchAll = () => {

      const promise = fetch(`https://restcountries.com/v3.1/all`)
      .then(({data}) => data )
      // console.log("response", response);
      // setApiAll(response);
      // setSavedApi(response);
      return wrapPromise(promise);
}

export default fetchAll;