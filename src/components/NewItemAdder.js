import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import Button from './Button'

const NewItemAdder = ( {mediaObjArr, setMediaObjArr} ) => {
  // states
  const [isAddingNewItem, setIsAddingNewItem] = useState(false)
  const [tempMediaObj, setTempMediaObj] = useState({
    title: "Title",
    medium: "Video Game",
    progress: false
  })

  // misc event handlers
  const handleMediaTitleChange = (event) => {
    setTempMediaObj({
      ...tempMediaObj,
      title: event.target.value
    })
  }

  const handleMediumChange = (event) => {
    setTempMediaObj({
      ...tempMediaObj,
      medium: (event.target.options[event.target.options.selectedIndex].value)
    })
  }

  const addNewMediaObj = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:3001/mediaObjArr', tempMediaObj)
      .then(response => {
        setMediaObjArr(mediaObjArr.concat(response.data))
        setTempMediaObj({
          title: "Title",
          medium: "Video Game",
          progress: false
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
          value={tempMediaObj.title}
          onChange={handleMediaTitleChange}
        />

        <select 
          value={tempMediaObj.medium}
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