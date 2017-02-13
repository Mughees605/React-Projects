import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute} from "react-router"
var Modal = require("./components/modal.js");
var Product = require('./components/product.js')
var Cart = require('./components/cart.js')
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const PRODUCTS = [
  { id: 0, src: 'https://www.drupal.org/files/book_covers/1430231351-the-definitive-guide-to-drupal-7.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'https://www.drupal.org/files/book_covers/1430231351-the-definitive-guide-to-drupal-7.jpg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'https://www.drupal.org/files/book_covers/1430231351-the-definitive-guide-to-drupal-7.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'https://www.drupal.org/files/book_covers/1430231351-the-definitive-guide-to-drupal-7.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
  { id: 4, src: 'https://www.drupal.org/files/book_covers/1430231351-the-definitive-guide-to-drupal-7.jpg', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
];

var App = React.createClass({
  componentWillReceiveProps(nextProps){
    this.isModal = nextProps.location.key;
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  },
  render:function(){
    if(this.isModal){
      return <Modal isOpen = {true}>{this.props.children}</Modal>
    }
    else{
    return(
      <div class = "well">
          {this.props.children}    
      </div>
    )
   }
  }
})

var Index = React.createClass({
  render:function(){
    return (
      <div>
        <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link key={picture.id}
              to={{pathname: `/products/${picture.id}`,
                state: { modal: true,
                  returnTo: this.props.location.pathname }
                }
              }>
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
})

let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}> 
     <IndexRoute component = {Index}/>
       <Route path="/products/:id" component={Product} addToCart = {addToCart} products={PRODUCTS} />
       <Route path="/cart" component={Cart}
      cartItems={cartItems} products={PRODUCTS}/>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
