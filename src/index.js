import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const userName = "Dan"
const idCounter = 5
const mediaObjArr = [
    {
      id: 1,
      title: "13 Sentinels",
      medium: "Video Game"
    },
    {
      id: 2,
      title: "Buffy: the Vampire Slayer",
      medium: "TV Show"
    },
    {
      id: 3,
      title: "Chronicle",
      medium: "Movie"
    },
    {
      id: 4,
      title: "Blood of Elves",
      medium: "Book"
    }
  ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App
    userName={userName}
    idCounter={idCounter}
    mediaObjArr={mediaObjArr}
  />
)