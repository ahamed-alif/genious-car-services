import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img, description} = service
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small className='description'>Description: {description}</small></p>
            <button className='button'>Book: {name}</button>
        </div>
    );
};

export default Service;