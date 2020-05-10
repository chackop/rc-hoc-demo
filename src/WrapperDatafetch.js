import React from "react";
import withDataFetchingClass from "./withDataFetchingClass";

function WrapperDatafetch({ loading, results, error }) {
    console.log('results', error)
    if (loading || error) {
        return loading ? "Loading..." : error.message;
    }

    return (
        <ul>
            {results && results.map(({ id, html_url, full_name }) => (
                <li key={id}>
                    <a href={html_url} target="_blank" rel="noopener noreferrer">
                        {full_name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default withDataFetchingClass({
    dataSource: "https://api.github.com/users/chackop/repos"
})(WrapperDatafetch);