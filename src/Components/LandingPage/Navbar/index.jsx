import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function Navbar () {
  const [showMenu, setShowMenu] = useState("nav")
  const [showNavList, setShowNavList] = useState("nav-list")
  const openMenuBtn = useRef()
  const closeMenuBtn = useRef()
  const menu = useRef()
  const navList = useRef()

  useEffect(() => {
    const screenWidth = window.innerWidth
  
    const handleOpenMenu = () => {
      setShowMenu("nav open")
      setShowNavList("nav-list show-list")
    }

    const handleCloseMenu = () => {
      setShowMenu("nav")
       setShowNavList("nav-list")
    }

    if (screenWidth < 600) {
      openMenuBtn.current.addEventListener('click', () => handleOpenMenu())
      closeMenuBtn.current.addEventListener('click', () => handleCloseMenu())
    }
  }, [])

  return (
    <div className="nav-bar">
      <span className="logo">Quicky</span>
      <nav ref={menu} className={showMenu}>
        <ul ref={navList} className={showNavList}>
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">Shop</li>
          <li className="nav-list-item">Pages</li>
          <li className="nav-list-item">Blog</li>
          <li className="nav-list-item">Contact</li>
        </ul>
        <i ref={closeMenuBtn} className="fa-solid fa-x"></i>
      </nav>
      <div className="icon-bag-user-container">
        <i className="fa-solid fa-search"></i>
        <div>
          <i className="fa-solid fa-bag-shopping"></i>
          <span>$420</span>
        </div>
        <i className="fa-regular fa-user"></i>
      </div>
      <i ref={openMenuBtn} className="fa-solid fa-bars"></i>
    </div>
  )
}