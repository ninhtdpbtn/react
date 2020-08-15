import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Header = props => {
    return (
      <div>
      <nav className="colorlib-nav" role="navigation">
<div className="top-menu">
  <div className="container">
    <div className="row">
      <div className="col-sm-7 col-md-9">
      <div id="colorlib-logo"><Link to="/"><a href="index.html">N Boutique</a></Link></div>
      </div>
      <div className="col-sm-5 col-md-3">
        <form action="#" className="search-wrap">
          <div className="form-group">
            <input type="search" className="form-control search" placeholder="Search" />
            <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search" /></button>
          </div>
        </form>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 text-left menu-1">
        <ul>
          <Link to="/"><li className="active"><a href="index.html">Home</a></li></Link> 
          <Link to="/product"><li><a href="women.html">Sản phẩm</a></li></Link>
          <Link to="/contact"><li><a href="contact.html">Liên hệ</a></li></Link>
          <Link to="/cart"><li className="cart"><a href="cart.html"><i className="icon-shopping-cart" /> Cart [0]</a></li></Link>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="sale">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 offset-sm-2 text-center">
        <div className="row">
          <div className="owl-carousel2">
            <div className="item">
              <div className="col">
                <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
              </div>
            </div>
            <div className="item">
              <div className="col">
                <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</nav>

      </div>
    
    )
}

Header.propTypes = {

}

export default Header
