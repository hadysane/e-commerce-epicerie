import React, {useState, Fragment} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../lib/slices/onlineStoreSlice";

export const Navbar = ({ filter, setFiltering}) => {
  const items = useSelector((state) => state.cart.items)
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <Link to="/" className="navbar-brand crimson">
        <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setFiltering(e.target.value.length > 0)
                  filter(e.target.value)
                }
                }
              />
            </form>
          </div>
          <div className="menu-right">
            <Link to="/cart">
              <i className="fa-sharp fa-solid fa-bag-shopping fa-2x grey"></i>
            </Link>
            <span className="badge badge-pill badge-success">{items.length > 0 && items.length}</span>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

export const Card = (props) => {
  const { item, count} = props;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={
            process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`
          }
          alt={item.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>€{item.price}/{item.unit}</p>
              <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${item.ref}`}>view product</button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} countCart={count} />
    </div>
  );
};


export const Modal = ({ item }) => {
  // use dispatch
  const dispatch = useDispatch()

  // quantity product
  const [qty, setQty] = useState(1)

  // add Product
  const add = (qty, details) => {
    dispatch(addToCart({ quantity: qty, details: details }))
  }

  return (
    <div
      className="modal fade "
      id={item.ref}
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{item.name}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={
                    process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`
                  }
                  alt={item.name}
                />
              </div>

              <div className="col-sm">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">{item.price}€/{item.unit}</h3> <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    type="button"
                    className="btn btn-secondary">
                    -
                  </button>
                  <span className="btn btn-light qty">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    type="button"
                    className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={() => {
                add(qty,item)
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export const List = props => {
  const { data, updateCart} = props; 
  return (
    <div className="col-sm">
      <div className="row">
        {data.map((item, index) => <Card key={index} item={item}  />)}
      </div>
    </div>
  );
};

//  process.env.PUBLIC_URL : préciser la destination il trouve ce qui corespond au fichier public pour l'inject et présenter au navigateur   
// il y a deux environnements : 
// - un qui corespond au développement et au développement qui est src
// - un autre pour le public avec le chemin qu'on mets en place 


export const CartPage = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-sm-2 cart">
        </div>
        <div className="col-sm-3 order-summary">
          <ul className="list-group">
            <li className="list-group-item">Order Summary</li>

            <li className="list-group-item">
              <ul className="list-group flex">
                <li className="text-left">Subtotal</li>
                <li className="text-right">€0.00</li>
              </ul>
              <ul className="list-group flex">
                <li className="text-left">shipping</li>
                <li className="text-right">€0.00</li>
              </ul>
              <ul className="list-group flex">
                <li className="coupon crimson">
                  <small>  Add Coupon Code</small>
                </li>
              </ul>
            </li>

            <li className="list-group-item ">
              <ul className="list-group flex">
                <li className="text-left">Total</li>
                <li className="text-right">€€0.00</li>
              </ul>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-light btn-lg btn-block checkout bg-crimson"
            disabled="true"
          >
            <a href="#" className="white">
              Checkout
            </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
}