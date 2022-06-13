import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const userName = "Dan"
const idCounter = 5
const mediaCardObjArr = [
    {
      id: 1,
      title: "13 Sentinels",
      mediaType: "Video Game"
    },
    {
      id: 2,
      title: "Buffy: the Vampire Slayer",
      mediaType: "TV Show"
    },
    {
      id: 3,
      title: "Chronicle",
      mediaType: "Movie"
    },
    {
      id: 4,
      title: "Blood of Elves",
      mediaType: "Book"
    }
  ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App
    userName={userName}
    idCounter={idCounter}
    mediaCardObjArr={mediaCardObjArr}
  />
)