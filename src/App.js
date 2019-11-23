import React from 'react';
import Logo from './Images/deskby-logo-white.png';
import CartLogo from './Images/shopping-cart.png';
import { Home } from './Home';
import './App.css';

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <a className="navbar-brand">
          <img src={Logo} width="200" height="30" alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Find a Space</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">How it Works</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Need a Help?</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <span><img src={CartLogo} width="20" height="20"/></span> 
              Cart(0)</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Find a Space</a>
          </li>
        </ul>
          <button className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">Add a Space</button>
        </form>
      </div>
    </nav>
    
  );
}
function Footer(){
  return(
    <div className="footer">
      <div id="container-footer">
        <div className="row justify-content-center">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-3">
              <div class="card border-light">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Light card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              </div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
    </div>
      
  );
}

export default App;
