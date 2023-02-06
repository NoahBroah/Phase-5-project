import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


function Navbar() {
    const [user, setUser] = useState('')

    function handleLogout(){
        console.log("Logged Out")
    }
  return (
     <div className="nav">
  <div className="nav-inner">
    <NavLink to="/" exact className="title">
      BlockCV
    </NavLink>
  </div>
  <div className="nav-inner">
    {/* {!user ? null :
    <NavLink to='/all_projects'>
      View Projects
    </NavLink>
} */}
    <NavLink to="/signup" exact className="hvr-rotate">
      Signup
    </NavLink>
    <NavLink to="/signup" className="hvr-rotate" onClick={handleLogout}>
      Logout
    </NavLink>
  </div>
</div>
);
}

export default Navbar