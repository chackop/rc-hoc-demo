import React from "react";
import withDataFetchingClass from "./withDataFetchingClass";

function Repositories() {

    return '';
}

export default withDataFetchingClass({
    dataSource: "https://api.github.com/users/chackop/repos"
})(Repositories);