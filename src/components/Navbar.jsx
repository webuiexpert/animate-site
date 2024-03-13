import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import "../components/Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <nav className="px-[2rem] py-[1rem]">
       <NavLink to ="/" className="font-bold text-[1.5rem] ">Website</NavLink>
      <ul className={menuOpen ? "open" : ""}>
        <li> <NavLink to ="/about"> About </NavLink> </li>
        <li> <NavLink to="/service"> Service </NavLink> </li>
        <li> <NavLink to="/contact"> Contact </NavLink> </li>
      </ul>
      <p className="menu" onClick={() => setmenuOpen(!menuOpen)}><GiHamburgerMenu /></p>

    </nav>
  )
}

export default Navbar