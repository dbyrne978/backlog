import React from 'react'
import { useState } from "react"

const MediaEleFilterByMedium = ({ mediumsToDisplay, setMediumsToDisplay }) => {
    const handleCheckboxChange = (event) => {
      let checkboxValue = event.target.value
      if (mediumsToDisplay.includes(checkboxValue)) {
        setMediumsToDisplay(
          mediumsToDisplay.filter(medium => medium != checkboxValue)
        )
      } else setMediumsToDisplay(mediumsToDisplay.concat(checkboxValue))
    }

    return(
      <div className="media-ele-filter-by-medium">
        <input
          type="checkbox"
          id="Video Game"
          value="Video Game"
          onChange={handleCheckboxChange}
          checked={mediumsToDisplay.includes("Video Game")}
        />
        <label htmlFor="Video Game">Video Game</label>

        <input
          type="checkbox"
          id="TV Show"
          value="TV Show"
          onChange={handleCheckboxChange}
          checked={mediumsToDisplay.includes("TV Show")}
        />
        <label htmlFor="TV Show">TV Show</label>

        <input
          type="checkbox"
          id="Movie"
          value="Movie"
          onChange={handleCheckboxChange}
          checked={mediumsToDisplay.includes("Movie")}
        />
        <label htmlFor="Movie">Movie</label>

        <input
          type="checkbox"
          id="Book"
          value="Book"
          onChange={handleCheckboxChange}
          checked={mediumsToDisplay.includes("Book")}
        />
        <label htmlFor="Book">Book</label>
      </div>
    )
  }

export default MediaEleFilterByMedium