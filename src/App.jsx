import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home/Home"
import Wishlist from "./pages/Wishlist/Wishlist"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  )
}

export default App
