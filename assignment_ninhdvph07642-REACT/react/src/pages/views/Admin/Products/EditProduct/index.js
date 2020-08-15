import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form'
import {useHistory, useParams} from 'react-router-dom'
import firebase from './../../../../../firebase'

const EditProduct =  ({onUpdate, products}) => {
    // validate và lấy dữ liệu từ form 
    const { register, handleSubmit, errors } = useForm();
    let history =  useHistory()
    let {id} =  useParams()
    const productCr = products.find(product => product.id === id)
    const [currentProduct, setcurrentProduct] = useState(productCr)
    // tạo sự kiện cho submit để lấy dữ liệu, dữ liệu được đẩy vào data
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () { 
            storageRef.getDownloadURL().then((url) => { 
                const newData = {
                    id, 
                    ...data,
                    image:url
                }
                onUpdate(newData)
                history.push('/admin/products')
            })
        })
    }   
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" defaultValue={productCr.name} name="name" className="form-control" ref={register}  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image</label>
                    <input type="file"  className="form-control" ref={register} name="image" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input type="number" defaultValue={productCr.price} className="form-control" ref={register} name="price" placeholder="Price" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct
