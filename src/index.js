import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const userName = "Dan"
const mediaCardObjArr = [
    {
      title: "13 Sentinels",
      mediaType: "Video Game"
    },
    {
      title: "Buffy: the Vampire Slayer",
      mediaType: "TV Show"
    },
    {
      title: "Chronicle",
      mediaType: "Movie"
    },
    {
      title: "Blood of Elves",
      mediaType: "Book"
    }
  ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App
    userName={userName}
    mediaCardObjArr={mediaCardObjArr}
  />
)