import React from 'react'
import ReactDOM from 'react-dom/client'

// import component (component is a function that returns jsx)
import App from './App.jsx'

// plain js, finds the empty div from index.html
const el = document.getElementById('root')

// go reactmode on it
const root = ReactDOM.createRoot(el)



root.render(
  <React.StrictMode><App /></React.StrictMode>
)