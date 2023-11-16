import { useState } from 'react';
import arrow1 from './arrow1.png';
import arrow2 from './arrow2.png';

const Carousel = ({images}) => {

  const [index, setIndex] = useState(0);

  const previousImage = () => {
  setIndex(index => {
    index --;
    if (index < 0) {
      return images.length - 1;
    }
    return index;
  });
}

const nextImage = () => {
  setIndex(index => {
    index ++;
    if (index > images.length - 1) {
      index = 0;
    }
    return index;
  });
}

  return (
    <div className='slidesBox'>
        <img className='arrow one' onClick={previousImage}src={arrow1} alt="arrow"/>
        <img className="slidePicture" src={images[index]} alt='location'/>
        <img className='arrow two' onClick={nextImage} src={arrow2} alt="arrow"/>
      </div>
  )
}

export default Carousel;