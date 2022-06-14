import React from 'react'
import Button from './Button'
import { useState } from "react"

const NewItemAdder = ({ stateVars, updateStateVars }) => {
  const [isAddingNewItem, updateIsAddingNewItem] = useState(false)
  
  const addNewMediaObj = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target, event)

    const newMediaObj = {
      id: stateVars.idCounter,
      title: "test title",
      mediaType: "test mediaType"
    }

    updateStateVars(
      {
        mediaObjArr: [...stateVars.mediaObjArr, newMediaObj],
        idCounter: stateVars.idCounter + 1
      }
    )
    updateIsAddingNewItem(false)
  }

  if (isAddingNewItem == false) {
    return (
      <Button
        onClick={() => updateIsAddingNewItem(true)}
        text='++ Add New BackLog Item ++'
      />
    )
  } else {
    return (
      <form onSubmit={addNewMediaObj}>
        <input />
        <button type="submit">save</button>
      </form>   
    )
  }
}

export default NewItemAdder;