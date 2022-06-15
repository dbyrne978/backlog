import React from 'react'
import Button from './Button'
import { useState } from "react"

const NewItemAdder = ({ stateVars, setStateVars }) => {
  const [isAddingNewItem, setIsAddingNewItem] = useState(false)
  const [newMediaObj, setNewMediaObj] = useState({
    title: "Title",
    medium: "Video Game"
  })

  const handleMediaTitleChange = (event) => {
    setNewMediaObj({
      ...newMediaObj,
      title: event.target.value
    })
  }

  const handleMediumChange = (event) => {
    setNewMediaObj({
      ...newMediaObj,
      medium: (event.target.options[event.target.options.selectedIndex].value)
    })
  }

  const addNewMediaObj = (event) => {
    event.preventDefault()

    // update array with new media object
    setStateVars(
      {
        mediaObjArr: stateVars.mediaObjArr.concat(newMediaObj),
        idCounter: stateVars.idCounter + 1
      }
    )

    // reset NewItemAdder states to default
    setNewMediaObj({
      title: "Title",
      medium: "Video Game"
    })
    setIsAddingNewItem(false)
  }

  if (isAddingNewItem == false) {
    return (
      <Button
        onClick={() => setIsAddingNewItem(true)}
        text='++ Add New BackLog Item ++'
      />
    )
  } else {
    return (
      <form onSubmit={addNewMediaObj}>
        <input
          type="text"
          value={newMediaObj.title}
          onChange={handleMediaTitleChange}
        />

        <br/>

        <select 
          value={newMediaObj.medium}
          onChange={handleMediumChange}>
          <option value="Video Game">Video Game</option>
          <option value="TV Show">TV Show</option>
          <option value="Movie">Movie</option>
          <option value="Book">Book</option>
        </select>

        <button type="submit">Save</button>
      </form>   
    )
  }
}

export default NewItemAdder;