import React from 'react'
import { useState } from "react"
import MediaEle from './MediaEle'
import MediaEleFilterByMedium from './MediaEleFilterByMedium'

const MediaEleContainer = (props) => {
  const allMediumValues = ["Video Game","TV Show","Movie","Book"]
  const [mediumsToDisplay, setMediumsToDisplay] = useState(allMediumValues)

  const fullMediaObjArr = Object.values(props)
  const filteredMediaObjArr = fullMediaObjArr.filter(
    mediaObj => mediumsToDisplay.includes(mediaObj.medium)
  )


  return (
    <ul className="media-ele-container">
      <MediaEleFilterByMedium 
        mediumsToDisplay={mediumsToDisplay}
        setMediumsToDisplay={setMediumsToDisplay}
      />

      {filteredMediaObjArr.map(mediaObj =>
        <MediaEle key={mediaObj.id} mediaObj={mediaObj} />
      )}
    </ul>
  )
}

export default MediaEleContainer