 import { Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/guestPages/landing";
 
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}
