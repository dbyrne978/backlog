import React from 'react'
import { useState } from 'react'
import Button from './Button'
import BacklogItemAdderErr from './BacklogItemAdderErr'
import backlogItemService from '../services/backlogItems'

const BacklogItemAdder = ( { backlogItems, setBacklogItems } ) => {
  // states
  const [isAddingItem, setIsAddingItem] = useState(false)
  const [tempBacklogItem, setTempBacklogItem] = useState({
    title: 'Title',
    medium: 'Video Game',
    progress: false
  })
  const [backlogItemAdderErr, setBacklogItemAdderErr] = useState(undefined)

  // misc event handlers
  const handleBacklogItemTitleChange = (event) => {
    setTempBacklogItem({
      ...tempBacklogItem,
      title: event.target.value
    })
  }

  const handleBacklogItemMediumChange = (event) => {
    setTempBacklogItem({
      ...tempBacklogItem,
      medium: (event.target.options[event.target.options.selectedIndex].value)
    })
  }

  const addNewBacklogItem = (event) => {
    event.preventDefault()
    setBacklogItemAdderErr(undefined)
    backlogItemService
      .create(tempBacklogItem)
      .then(returnedBacklogItem => {
        setBacklogItems(backlogItems.concat(returnedBacklogItem))
        setTempBacklogItem({
          title: 'Title',
          medium: 'Video Game',
          progress: false
        })
        setIsAddingItem(false)
      })
      .catch(error => {
        setBacklogItemAdderErr(error.response.data.error)
      })
  }

  //
  if (isAddingItem === false) {
    return (
      <Button
        onClick={() => setIsAddingItem(true)}
        text='++ Add New BackLog Item ++'
      />
    )
  } else {
    return (
      <>
        <form onSubmit={addNewBacklogItem}>
          <input
            type='text'
            value={tempBacklogItem.title}
            onChange={handleBacklogItemTitleChange}
          />

          <select
            value={tempBacklogItem.medium}
            onChange={handleBacklogItemMediumChange}>
            <option value='Video Game'>Video Game</option>
            <option value='TV Show'>TV Show</option>
            <option value='Movie'>Movie</option>
            <option value='Book'>Book</option>
          </select>
          <button type='submit'>Save</button>
        </form>
        <BacklogItemAdderErr backlogItemAdderErr={backlogItemAdderErr} />
      </>
    )
  }
}

export default BacklogItemAdder