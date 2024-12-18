import React from 'react';

const Singleuserdata = ({singleData}) => {
    
    const {name,phone,website} = singleData;

    return (
        <div>
            <h1>{name}</h1>
            <p>{website}</p>
            <p><h3>{phone}</h3></p>
        </div>
    );
};

export default Singleuserdata;