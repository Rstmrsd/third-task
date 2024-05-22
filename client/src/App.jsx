import axios from 'axios'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROOTES } from './index.Routes'
import { useEffect,useState } from 'react'
import { DataContextProvider } from './Context/Context'


const routes = createBrowserRouter(ROOTES)
function App() {


  

  return (
    <>
    <DataContextProvider>

      <RouterProvider router={routes}></RouterProvider>
    </DataContextProvider>
    </>
  )
}

export default App
