import React from 'react'

const MediaEle = ({ mediaObj }) => (
  <li className="media-ele">
    {mediaObj.title} ({mediaObj.mediaType})
  </li>
)

export default MediaEle