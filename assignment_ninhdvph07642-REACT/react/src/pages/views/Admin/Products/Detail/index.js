import React from 'react'
import PropTypes from 'prop-types'
import {useHistory, useParams} from 'react-router-dom'

const Detail = ({products}) => {
    let {id} =  useParams()
    const productCr = products.filter(product => product.id === id)
    return (
        <div>
                <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {productCr.map((pr, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{pr.name}</td>
                                        <td><img src={pr.image} width={50} alt="" /></td>
                                        <td>{pr.price}</td>
                                        <td>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {

}

export default Detail
