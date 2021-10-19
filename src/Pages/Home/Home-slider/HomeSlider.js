import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './home-slider-1.jpg'
import img2 from './home-slider-2.jpg'
import img3 from './home-slider-3.jpg'
import img4 from './home-slider-4.jpg'
const HomeSlider = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>You will Find The Best Doctors Here!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <p>Best Equipments For Treatment</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>We Care For Patients A Lot! Operations are done very Carefully!</p>
    </Carousel.Caption>
    </Carousel.Item>
  <Carousel.Item>
    <img
    
      className="d-block w-100"
      src={img4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>We Are Ready To Serve You At Any Time!</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
    );
};

export default HomeSlider;