import axios from 'axios';

export const fetchQuote = () => {
    return dispatch => {
        dispatch({ type: "FETCH_QUOTE_START" });
        axios
            .get("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
            // .get("https://breaking-bad-quotes.herokuapp.com") // test to break api
            // .then(res => console.log(res))
            .then(res => {
                //res.data.map(obj => obj.quote)
                dispatch({
                    type: "FETCH_QUOTE_SUCCESS",
                    payload: res.data.map(obj => obj.quote)
                });
            })
            // .catch(err => console.log(err.response));
            .catch(err => {
                // message: err.response.status
                // message: err.response.statusText
                dispatch({
                    type: "FETCH_QUOTE_FAILURE",
                    payload: `Error ${err.response.status}: ${err.response.statusText}`
                });
            });
    };
};