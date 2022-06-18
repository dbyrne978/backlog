import React from 'react'
import Button from './Button'

const MediaEle = ({ mediaObj, toggleProgress }) => {
 const buttonText = mediaObj.progress
    ? 'IN PROGRESS' : 'IN BACKLOG'

  return (
  <li className="media-ele">
    {mediaObj.title} ({mediaObj.medium})
      <Button
        onClick={toggleProgress}
        text={buttonText}
      />
  </li>
)}

export default MediaEle