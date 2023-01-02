import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App  from './App'
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
)
