import React from 'react'
import PropTypes from 'prop-types'
import {useHistory, useParams} from 'react-router-dom'

const Detail = ({products}) => {
    let {id} =  useParams()
    const productCr = products.filter(product => product.id === id)
  return (
    <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="index.html">product</a></span> / <span>Detail</span></p>
              </div>
            </div>
          </div>
        </div>
        {productCr.map((pr, index) => (
        <div className="colorlib-about">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-sm-6 mb-3">
                <div className="video colorlib-video" >
                <img  src=""  />
                  <div className="overlay" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-wrap">
                <div className="desc">
               <h2>{pr.name}</h2> 
               <h5>Giá :{pr.price}</h5>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
      </div>
  )
}

Detail.propTypes = {

}

export default Detail
