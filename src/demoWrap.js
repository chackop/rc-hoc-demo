import React from 'react';
import withHOCClassComp from './HOCclass';

const PropDisplay = props => (
    <div>
        Prop to be displayed: {props.defaultPropTest}.
  </div>
);

const WrappedComponent = withHOCClassComp(PropDisplay);

export default WrappedComponent;