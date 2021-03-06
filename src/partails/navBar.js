
import React from 'react';
import { NavLink } from 'react-router-dom'


const navbar = (props)=> {
  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand"><a className="navbar-item profile-icon" href="/">👨‍🏫</a></div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <div className="navbar-item">
              <p className="control"><NavLink className="button is-primary is-outlined is-rounded" to="/"><span>Say Hello</span></NavLink></p>
              <p className="control"><NavLink className="button is-primary is-outlined is-rounded" to="/youtube"><span>Tutorials</span></NavLink></p>
              <p className="control"><a href="http://tkssharma.com/blog" className="button is-primary is-outlined is-rounded"><span>Blogs</span></a></p>
              <p className="control"><NavLink className="button is-primary is-outlined is-rounded" to="/talks"><span>Talks</span></NavLink></p>
              <p className="control"><NavLink className="button is-primary is-outlined is-rounded" to="/training"><span>Trainings</span></NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar;