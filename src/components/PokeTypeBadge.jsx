import React from 'react';

const PokeTypeBadge = props =>{

    if(!props.type){

    }
    return (<p className={'badge-type-'+ props.type.toString()}>{props.type.toUpperCase()}</p>);
};

export default PokeTypeBadge;