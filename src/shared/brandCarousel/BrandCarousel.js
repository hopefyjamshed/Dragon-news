import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../Assets/Brands/brand1.png'
import Brand2 from '../../Assets/Brands/brand2.png'

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />


                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousel;