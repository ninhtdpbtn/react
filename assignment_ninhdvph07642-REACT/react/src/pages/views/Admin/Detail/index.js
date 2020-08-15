import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

const Detail = ({ products }) => {
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    console.log(product);
    return (
        <div>

            <div className="card-body">
                <div className="table-responsive">

                    <table className="table">
                        <thead>
                            <tr>

                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{product.name}</td>
                                <td><img src={product.image} alt="" width="50" /></td>
                                <td>{product.price}</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

Detail.propTypes = {

}

export default Detail