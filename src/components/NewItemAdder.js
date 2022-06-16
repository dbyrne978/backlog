import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import Button from './Button'

const NewItemAdder = ( {mediaObjArr, setMediaObjArr} ) => {
  const [isAddingNewItem, setIsAddingNewItem] = useState(false)
  const [newMediaObj, setNewMediaObj] = useState({
    title: "Title",
    medium: "Video Game"
  })

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
    axios
      .post('http://localhost:3001/mediaObjArr', newMediaObj)
      .then(response => {
        setMediaObjArr(mediaObjArr.concat(response.data))
        setNewMediaObj({
          title: "Title",
          medium: "Video Game"
        })
        setIsAddingNewItem(false)
      })
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