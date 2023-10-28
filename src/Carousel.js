import React from 'react';
import { useState } from 'react';
import { data } from './data';
import arrow1 from './arrow1.png';
import arrow2 from './arrow2.png';


const Carousel = () => {

  const [location, setLocation] = useState(4);
  const {id, placeName, description, image, showMore} = data[location]

  const previousImage = () => {
  setLocation(prevLocation => {
    let newLocation = prevLocation - 1;
    if (newLocation < 0) {
      newLocation = data.length - 1;
    }
    return newLocation;
  });
}

const nextImage = () => {
  setLocation(prevLocation => {
    let newLocation = prevLocation + 1;
    if (newLocation >= data.length) {
      newLocation = 0;
    }
    return newLocation;
  });
}

  return (
    <div className='slidesBox'>
        <img className='arrow one' onClick={previousImage}src={arrow1} alt="arrow"/>
        <img className="slidePicture" src={image} alt='location'/>
        <img className='arrow two' onClick={nextImage} src={arrow2} alt="arrow"/>
      </div>
  )
}

export default Carousel;