import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import Button from './Button'

const NewItemAdder = ( {mediaObjArr, setMediaObjArr} ) => {
  const [isAddingNewItem, setIsAddingNewItem] = useState(false)
  const [newMediaObj, setNewMediaObj] = useState({
    id: 0,
    title: "Title",
    medium: "Video Game"
  })
  const [counters, setCounters] = useState({})

  // axios
  useEffect(() => {
    axios
      .get('http://localhost:3001/counters')
      .then(response => {
        setCounters(response.data)
        setNewMediaObj({
          ...newMediaObj,
          id: response.data.idCounter
        })
      })
  }, [])

  // misc event handlers
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
    setMediaObjArr(mediaObjArr.concat(newMediaObj))
    setCounters({
      idCounter: counters.idCounter + 1
    })
    setNewMediaObj({
      id: counters.idCounter + 1,
      title: "Title",
      medium: "Video Game"
    })
    setIsAddingNewItem(false)
  }

  //
  if (isAddingNewItem === false) {
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