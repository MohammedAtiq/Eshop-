import React from 'react'
import { useCart } from 'react-use-cart';
import { TbShoppingCartPlus } from "react-icons/tb";

const CardContainer = (props) => {
  const { image, price, title } = props.data

  const { addItem } = useCart();

  const addToCart = () => {
    addItem(props.data)
  }
  return (
    <div className="col-md-3">
      <div className="card " style={{ height: '350px', borderRadius: '20px' }}>
        <div className="itemImg mx-auto">
          <div style={{ width: '9rem' }}>
            <img variant="top" src={image} className="img-fluid" style={{ height: '170px' }} alt="..." />
          </div>
        </div>
        <div className="card-body" >
          <h5 className="card-title text-center" style={{ fontSize: '15px' }}>{title}</h5>
          <div className='price'>
            <h5 className="card-title"> $ <span>{price}</span> </h5>
            <i onClick={() => addToCart()}><TbShoppingCartPlus /></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContainer
