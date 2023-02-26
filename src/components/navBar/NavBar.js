import React from 'react'
import './NavBar.css'
import banner from '../../assets/images/'

function navBar() {
  return (
    <div className='navbar'>
        <img className='logo' src={banner} alt="loading" />
        <img className='avatar' src="images/netflix-avatar.png" alt="loading" />
    </div>
  )
}

export default navBar