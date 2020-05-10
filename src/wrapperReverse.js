import React from 'react';
import reverseHOC from './withReverseHOCclass';

const nameElement = (props) => <span>{props.children}</span>

const wrapperReverse = reverseHOC(nameElement);

export default wrapperReverse;