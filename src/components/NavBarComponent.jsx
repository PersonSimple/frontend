import React, { Component } from 'react';

class NavBarComponent extends Component {
    render() {
        return (
   <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Login</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                  <li className="nav-item">
                    <a className="nav-link" href="/add-angel">Update Angel Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/list-profile">List-Profiles</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/aboutUs">About Us</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/pro-id">ShowProfileById</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/sign-up">Sign-Up</a>
                  </li>
                </ul>
               
              </div>
  </div>
</nav>
            </div>
        );
    }
}

export default NavBarComponent;