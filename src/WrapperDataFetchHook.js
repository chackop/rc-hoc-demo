import React from "react";
import useDataFetchingHooks from "./useDataFetchingHooks";

function WrapperDataFetchHook() {
    const { loading, results, error } = useDataFetchingHooks(
        "https://api.github.com/users/chackop/repos"
    );

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

export default WrapperDataFetchHook;