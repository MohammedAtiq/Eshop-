import React from 'react'
import { useCart } from 'react-use-cart';
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiFillDelete } from "react-icons/ai";

const ShopCart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()

  return (
    <>
      <div className="container mt-3">
        <h5 >{isEmpty ? 'Your cart is empty' : 'Add Some Item'}</h5>
        {!isEmpty && <h4 style={{ textAlign: 'center', margin: '20px 0 20px 0' }}>total $ {cartTotal}</h4>}
        <div className="row "  style={{ height:'55vh'}} >
          <div className={`col-md-10 mx-auto ${!isEmpty ? 'cartHeight' : ''} `} >
            <table className="table">
              <tbody className="size">
                {items.map((item, index) => {
                  return (
                    <tr key={index} style={{ height: '100px' }}>
                      <th><img src={item.image} style={{ width: '4rem' }} alt={item.title} /></th>

                      <td style={{fontSize: '10px'}}> {item.title}</td>
                      <td style={{ width: '108px' ,fontSize: '15px' }}>$ {item.price}</td>

                      <td style={{ width: '100px',fontSize: '15px'}}><AiOutlineMinusCircle onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />({item.quantity}) <AiOutlinePlusCircle onClick={() => updateItemQuantity(item.id, item.quantity + 1)} /></td>
                      <td> <AiFillDelete style={{ fontSize: '20px', color: 'rgb(34, 152, 156)' }} onClick={() => removeItem(item.id)} /></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <button style={{ margin: '50px 0px 0 30px', fontSize: '12px', padding: '8px 10px', backgroundColor: 'rgb(34, 152, 156)', color: 'white', borderRadius: '15px' }} onClick={() => emptyCart()}>Remove all</button>
        <button style={{ margin: '50px 30px 0 0', fontSize: '12px', float: 'right', padding: '8px 10px', backgroundColor: 'rgb(4 118 6)', color: 'white', borderRadius: '15px' }}>Check Out</button>
      </div>
    </>
  )
}

export default ShopCart
