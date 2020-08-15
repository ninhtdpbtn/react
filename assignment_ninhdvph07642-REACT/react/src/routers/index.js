import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import AddProduct from '../pages/views/Admin/Products/AddProduct';
import EditProduct from '../pages/views/Admin/Products/EditProduct';
import Detail from '../pages/views/Main/Detail';



const Routers = ({ products, onAdd, onRemove, onUpdate }) => {

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onRemove} />
                            </Route>
                            <Route path='/admin/product/add'>
                                <AddProduct onAdd={onAdd}/>
                            </Route>
                            <Route path='/admin/product/:id'>
                                <EditProduct  products={products} onUpdate={onUpdate} />
                            </Route>
                            <Route path='/admin/view/:id'>
                                <Detail  products={products}  />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home item =  {products} />
                            </Route>
                            <Route path="/about">
                                <About  />
                            </Route>
                            <Router path='/product/detail/:id'>
                                <Detail products={products}/>
                            </Router>
                            
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
