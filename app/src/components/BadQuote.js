import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchQuote } from "../store/actions/quoteActions";

const BadQuote = (props) => {
    useEffect(() => {
        props.fetchQuote();
    }, []);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            {props.isFetching && (
                <Loader 
                    type="TailSpin" 
                    color="#00BFFF" 
                    height={80} 
                    width={80}
                />
            )}
            {props.quote && <h3>"{props.quote}"</h3>}
            {props.error && <p>{props.error}</p>}
            <button onClick={props.fetchQuote}>Get A New Quote</button>
        </div>
    )
};

const mapStateToProps = state => {
    // console.log(state);
    return {
        quote: state.quotes.quote,
        isFetching: state.quotes.isFetching,
        error: state.quotes.error
    };
};

export default connect(
    mapStateToProps,
    { fetchQuote }
)(BadQuote);