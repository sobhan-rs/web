import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Todos } from "./components/Todos.jsx";
import { Todolist } from "./components/Todolist.jsx";
import './index.css'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <App />
     
  </StrictMode>,
)
