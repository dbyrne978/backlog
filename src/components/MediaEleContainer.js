import React from 'react'
import MediaEle from './MediaEle'

const MediaEleContainer = (props) => {
  const mediaObjArr = Object.values(props)

  return (
    <ul className="media-ele-container">
      {mediaObjArr.map(mediaObj =>
        <MediaEle key={mediaObj.id} mediaObj={mediaObj} />
      )}
    </ul>
  )
}

export default MediaEleContainer