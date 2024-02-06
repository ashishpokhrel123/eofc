import LoginPage from "./page/Login/Login";
import {  Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <Routes>
   <Route path="/" element={<LoginPage />} />
   
</Routes>
  )
}