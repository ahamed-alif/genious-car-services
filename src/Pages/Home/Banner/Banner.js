import React, { useState } from 'react';
import './Banner.css'
import { Carousel, Col } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2 (1).jpg'
import banner3 from '../../../images/banner/banner3.jpg'


const Banner = () => {
   
    return (
      <Col sm={12}>
          <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className='carusel-text'>NOBANER CHAT</h5>
            <p className='carusel-text'>love is not so cheap,no need to be childish.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className='carusel-text'>Dhuro ki kori</h5>
            <p className='carusel-text'>Love is not so cheap, no need to be childis.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className='carusel-text'>R lagaiyo na</h5>
            <p className='carusel-text'>
              Find out the new one, Will I become a child with the old one.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>

    );
};

export default Banner;