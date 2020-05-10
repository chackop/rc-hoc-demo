import React from 'react';

const withHOCClassComp = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            return <WrappedComponent
                {...this.props}
                defaultPropTest={69}
            />;
        }
    }

    return HOC;
};

export default withHOCClassComp;
