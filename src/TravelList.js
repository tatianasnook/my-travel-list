import React from 'react';
import { data } from './data';
import { useState } from 'react';
import Carousel from './Carousel';

function TravelList() {
  const [places, setPlaces] = useState(data)
  const [showText, setShowText] = useState(false)

  const removePlace = (id) => {
    let newPlaces = places.filter(place => place.id !== id)
    setPlaces(newPlaces)
  }

  const showDescription = (place) => {
    place.showMore = !place.showMore
    setShowText(!showText)
  }

  return (
    <div>
    <div>
      {places.map(place => {
        const {id, placeName, description, images, showMore} = place
          return (
            <div key={id} className='container'>
              <h2>{placeName}</h2>
              <Carousel images={images}/>
              <p>
                {showMore ? description : description.substring(0, 220) + "..."}
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
  )
}

export default TravelList;
