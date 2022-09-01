import React, {useState} from 'react'
import './navbar.css'
import Logo from '../../assets/Logo.svg'
import Bells from '../../assets/navbar-bell.svg'
import Cross from '../../assets/navbar-crossbar.svg'
import Menu from '../../assets/navbar-menu.svg'

const Menus = () => (
    <>
    <p><a href="#home">what we do</a></p>
    <p><a href="#wgpt3">about</a></p>
    <p><a href="#possibility">events</a></p>
    </>
  )


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='nav__navbar'>
        <div className="nav__navbar-links">
            <div className="nav__navbar-links_logo">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
        <div className="nav__navbar-news">
            <div className="nav__navbar-links_container">
                <Menus/>
            </div>
            <div className="nav__navbar-links_news">
              <img src={Bells} alt="" />
              <p>News</p>
            </div>
        </div>
        <div className="nav__navbar-menu">
          {toggleMenu
            ? <img src={Cross}  onClick={() => setToggleMenu(false)} /> 
            : <img src={Menu}  onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="nav__navbar-menu_container scale-up-center">
              <div className="nav__navbar-menu_container-links">
                <Menus/>
              </div>
              <div className="nav__navbar-menu-links_news">
                {/* <img src={Bells} alt="" />
                <p>News</p> */}
              </div>
            </div>
          )}
        </div>
        
    </div>
  )
}

export default Navbar