import React from 'react'
import Button from './Button'

const BacklogItemElement = ({ backlogItem, toggleProgress }) => {
  const buttonText = backlogItem.progress
    ? 'IN PROGRESS' : 'IN BACKLOG'

  return (
    <li className="backlog-item-element">
      {backlogItem.title} ({backlogItem.medium})
      <Button
        onClick={toggleProgress}
        text={buttonText}
      />
    </li>
  )
}

export default BacklogItemElement