import React from 'react'
import { useState } from "react"
import MediaEle from './MediaEle'
import MediaEleFilterByMedium from './MediaEleFilterByMedium'
import mediaObjService from '../services/mediaObjArr'

const MediaEleContainer = ( { mediaObjArr, setMediaObjArr} ) => {
  const allMediumValues = ["Video Game","TV Show","Movie","Book"]
  const [mediumsToDisplay, setMediumsToDisplay] = useState(allMediumValues)

  const filteredMediaObjArr = mediaObjArr.filter(
    mediaObj => mediumsToDisplay.includes(mediaObj.medium)
  )

  const toggleProgressOf = id => {
    const mediaObj = mediaObjArr.find(n => n.id === id)
    const changedMediaObj = { ...mediaObj, progress: !mediaObj.progress }
  
    mediaObjService
      .update(id, changedMediaObj)
      .then(returnedMediaObj => {
        setMediaObjArr(mediaObjArr.map(mediaObj => {
          if (mediaObj.id !== id) {
            return mediaObj
          } else {
            return returnedMediaObj
          }
      }))
    })
  }

  return (
    <ul className="media-ele-container">
      <MediaEleFilterByMedium 
        mediumsToDisplay={mediumsToDisplay}
        setMediumsToDisplay={setMediumsToDisplay}
      />

      {filteredMediaObjArr.map(mediaObj =>
        <MediaEle
          key={mediaObj.id}
          mediaObj={mediaObj}
          toggleProgress = {() => toggleProgressOf(mediaObj.id)}
        />
      )}
    </ul>
  )
}

export default MediaEleContainer