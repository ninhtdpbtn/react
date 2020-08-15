import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Home = ({item}) => {
    return (


      <div>
  
      <div className="colorlib-intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a href="#" className="featured-img" style={{backgroundImage: 'url(images/men.jpg)'}} />
                <div className="desc">
                  <h2><a href="#">Shop Men's Collection</a></h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a href="#" className="featured-img" style={{backgroundImage: 'url(images/women.jpg)'}} />
                <div className="desc">
                  <h2><a href="#">Shop Women's Collection</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
          </div>
    
          
          <div className="row row-pb-md">
          {item.map(({ name,price,image,id }, index) => (
            <div className="col-lg-3 mb-4 text-center">
                 <div className="product-entry border">
                 <a href="#" className="prod-img">
                 <Link to={'/product/detail/'+id}><img src={image} className="img-fluid" alt="Free html5 bootstrap 4 template" /></Link>
                 </a>
                 <div className="desc">
                 <Link to={'/product/detail/'+id}><h2><a href="#">{name}</a></h2></Link>
                   <span className="price">{price}</span>
                 </div>
               </div>
            </div>
               ))}
          </div>
    
    
          <div className="row">
            <div className="col-md-12 text-center">
              <p><a href="#" className="btn btn-primary btn-lg">Shop All Products</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-partner">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>Trusted Partners</h2>
            </div>
          </div>
          <div className="row">
            <div className="col partner-col text-center">
              <img src="images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="images/brand-4.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
   
    )
}

Home.propTypes = {

}

export default Home
