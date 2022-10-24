import React, { Fragment, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import "../styles/App.css"
import { updateCart, removeToCart } from '../lib/slices/onlineStoreSlice';

const Row = (props) => {
  /// state globale
  const { details, quantity } = props.item

  //state local quantity
  const [qty, setQty] = useState(quantity)

  console.log(props.item); 

  // use dispatch
  const dispatch = useDispatch()
  
  // handling click update
  const update = (item, qty) => {
    dispatch(updateCart({ item: item, quantity: qty }))
  }

  // handling click remove
  const remove = (item) => {
    dispatch(removeToCart({item: item}))
  }

  return (
    <tr>
      <td>
        <img
          width="70"
          height="70"
          src={process.env.PUBLIC_URL + `/assets/${details.category}/${details.image}`}
          alt={details.name}
        />
      </td>
      <td>
        {details.ref}
      </td>
      <td>
        €{details.price}/{details.unit}
      </td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              if (qty > 1) {
                setQty(qty - 1)
                update(props.item, qty - 1)
              }
            }}
          >
            -
          </button>
          <span className="btn btn-light">{qty}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setQty(qty + 1)
              update(props.item, qty + 1)
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{(details.price * qty).toFixed(2)}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={()=> remove(props.item)}
        >
          X
        </button>
      </td>
    </tr>
  );
}


const Table = () => {
  const items = useSelector((state) => state.cart.items)
  return (
    <table>
      <tr>
        <th width="200">Product</th>
        <th width="80">Reference</th>
        <th width="150">Price</th>
        <th width="150">Quantity</th>
        <th width="200">Total</th>
      </tr>
      { items.length > 0 &&  items.map((item, i) => 
        <Row key={i} item={item} />
      )}
    </table>
  );
}

export const CartPage = () => {
  return (
    <Fragment>
      <div className='container'>
      <div className="row">
        <div className="col-sm cart">
          <Table/>
        </div>
        <div className="col-sm-3 order-summary">
          <ul className="list-group">
            <li className="list-group-item">Order Summary</li>

            <li className="list-group-item">
              <ul className="list-group flex">
                <li className="text-left">Subtotal</li>
                <li className="text-right">€0.00</li>
              </ul>
              <ul
                className="list-group flex"
                // className={`list-group flex ${subTotal <= 0 ? "lightGray" : ""
                //   }`}
              >
                <li className="text-left">shipping</li>
                <li className="text-right">€0.00</li>
              </ul>
              <ul className="list-group flex">
                <li className="coupon crimson">
                  <small> Add Coupon Code</small>
                </li>
              </ul>
            </li>

            <li className="list-group-item ">
              <ul className="list-group flex">
                <li className="text-left">Total</li>
                <li className="text-right">€0.00</li>
              </ul>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-light btn-lg btn-block checkout bg-crimson"
            // disabled={!items.length}
            disabled={true}
          >
            <a href="#" className="white">
              Checkout
            </a>
          </button>
        </div>
        </div>
      </div>
    </Fragment>
  );
}