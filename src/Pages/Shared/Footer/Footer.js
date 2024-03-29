import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center mt-5'>
            <h3>My Solve @ {year}</h3>
        </footer>
    );
};

export default Footer;