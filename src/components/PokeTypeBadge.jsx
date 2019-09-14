import React from 'react';

const PokeTypeBadge = props =>{

    if(!props.type){

    }
    return (<p className={'badge-type-'+ props.type}>{props.type.toUpperCase()}</p>);
};

export default PokeTypeBadge;