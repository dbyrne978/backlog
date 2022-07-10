import React from 'react'
import { useState } from 'react'
import BacklogItemElement from './BacklogItemElement'
import BacklogItemElementFilterByMedium from './BacklogItemElementFilterByMedium'
import backlogItemService from '../services/backlogItems'

const BacklogItemElementContainer = ( { backlogItems, setBacklogItems } ) => {
  const allMediumValues = ['Video Game','TV Show','Movie','Book']
  const [mediumsToDisplay, setMediumsToDisplay] = useState(allMediumValues)

  const filteredBacklogItems = backlogItems.filter(
    backlogItem => mediumsToDisplay.includes(backlogItem.medium)
  )

  const toggleProgressOf = id => {
    const backlogItem = backlogItems.find(n => n.id === id)
    const changedBacklogItem = { ...backlogItem, progress: !backlogItem.progress }

    backlogItemService
      .update(id, changedBacklogItem)
      .then(returnedBacklogItem => {
        setBacklogItems(backlogItems.map(backlogItem => {
          if (backlogItem.id !== id) {
            return backlogItem
          } else {
            return returnedBacklogItem
          }
        }))
      })
  }

  return (
    <ul className='backlog-item-element-container'>
      <BacklogItemElementFilterByMedium
        mediumsToDisplay={mediumsToDisplay}
        setMediumsToDisplay={setMediumsToDisplay}
      />

      {filteredBacklogItems.map(backlogItem =>
        <BacklogItemElement
          key={backlogItem.id}
          backlogItem={backlogItem}
          toggleProgress = {() => toggleProgressOf(backlogItem.id)}
        />
      )}
    </ul>
  )
}

export default BacklogItemElementContainer