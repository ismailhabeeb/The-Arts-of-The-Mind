import React from 'react'
import "./NavigationBar.css"

function NavigationBar() {
  return (
    <nav>
        <a href="/"> Arts </a>
        <div>
            <p>Welcome, <span>User</span></p>
            <i className='fa fa-user'></i>
        </div>
    </nav>
  )
}

export default NavigationBar;
