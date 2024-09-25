import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import App from "./App"
import MyForm from "./components/Login"
import Hobbies from "./components/Hobbies"
import Home from "./components/Home" 

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} /> 
      <Route path="/form" element={<MyForm />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()