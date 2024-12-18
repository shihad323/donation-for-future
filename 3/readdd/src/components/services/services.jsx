import React from 'react';

const Services = ({country}) => {
    const {name} = country;
    return (
        <div>
            <h3>name :{name.name}</h3>
        </div>
    );
};

export default Services;