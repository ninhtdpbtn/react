import React from 'react'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import firebase from './../../../../../firebase'
 
const AddProduct = ({onAdd}) => {
    const { register, handleSubmit, errors } = useForm();
    let history =  useHistory()   
    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url
                }
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
                history.push('/admin/products')
            })
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" name="name" className="form-control"  aria-describedby="emailHelp" ref={register} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image</label>
                    <input type="file" className="form-control" name="image" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input type="number" className="form-control" name="price" ref={register} placeholder="Price" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
