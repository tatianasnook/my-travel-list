import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);
  
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
      {places.map(place => {
        const {id, placeName, description, image, showMore} = place
        
        return (
          <div className='container' key={id}>
            <h2>{placeName}</h2>
            <img src={image} alt={placeName} width="600px"/>
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
      <button className='btn deleteBtn' onClick={() => setPlaces([])}>Delete All</button>
    </div>
  );
}

export default App;
