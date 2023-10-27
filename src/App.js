import './App.css';
import { data } from './data';
import { useState } from 'react';
import arrow1 from './arrow1.png';
import arrow2 from './arrow2.png';

function App() {
  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);
  
  const [location, setLocation] = useState(4);
  const {image} = data[location]

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

  const removePlace = (id) => {
    let newPlaces = places.filter(place => place.id !== id)
    setPlaces(newPlaces)
  } 

  const showDescription = (place) => {
    place.showMore = !place.showMore
    setShowText(!showText)
  }
  
  return (
    <div className="App">
      <h1>my travel bucket list - {places.length}</h1>

      <div className='slidesBox'>
        <img className='arrow one' onClick={previousImage}src={arrow1} alt="arrow"/>
        <img className="slidePicture" src={image} alt='location'/>
        <img className='arrow two' onClick={nextImage} src={arrow2} alt="arrow"/>
      </div>

      <div className='main'>
      {places.map(place => {
        const {id, placeName, description, image, showMore} = place
        
        return (
          
          <div className='container' key={id}>
            <h2>{placeName}</h2>
            <img src={image} alt={placeName} width="500px" height="400px"/>
            <p>
              {showMore ? description : description.substring(0, 260) + '...'}
              <button className='textBtn' onClick={() => showDescription(place)}>
                {showMore ? 'show less' : 'show more'}
              </button>
            </p>
            <button className='btn' onClick={() => removePlace(id)}>Done</button>
          </div>
          
        )
      })}
      </div>
      <button className='btn deleteBtn' onClick={() => setPlaces([])}>Delete All</button>
    </div>
  );
}

export default App;
