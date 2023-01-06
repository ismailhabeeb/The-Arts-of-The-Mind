import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="muby mt-5 mb-5">
    <div className="cardi">
    <div className="card bg-dark text-white border-0">
        <img src="./card1.jpg" className="card-img" alt="background" 
        height= "400px" />
        <div className="card-img-overlay d-flex flex-column 
        justify-content-center ms-5">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">REACT BLOG APP</h5>
            <p className="card-text lead fs-2 fw-bolder text-info">
                CHECK OUR BLOG</p>

            </div>
    </div>
            
           
        </div>
    </div>
    

</div>
  )
}

export default Header