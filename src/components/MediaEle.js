import React from 'react'

const MediaEle = ({ mediaObj }) => (
  <li className="media-ele">
    {mediaObj.title} ({mediaObj.medium})
  </li>
)

export default MediaEle