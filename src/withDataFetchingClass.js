import React from "react";

const withDataFetchingClass = props => WrappedComponent => {
    class withDataFetchingClass extends React.Component {

        constructor() {
            super();
            this.state = {
                results: [],
                loading: true,
                error: ""
            };
        }

        async fetchData() {
            try {
                const data = await fetch(props.dataSource);
                const json = await data.json();

                if (json) {
                    this.setState({
                        results: json,
                        loading: false
                    });
                }
            } catch (error) {
                this.setState({
                    loading: false,
                    error: error.message
                });
            }
        }

        async componentDidMount() {
            this.fetchData();
        }


        render() {
            return (
                <WrappedComponent />
            );
        }
    }

    WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

    return withDataFetchingClass;
};

export default withDataFetchingClass;