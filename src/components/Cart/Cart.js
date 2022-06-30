import { useContext } from 'react'

import Modals from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItems from './CartItem'
import CartItem from './CartItem'
import Checkout from './Checkout'
const Cart = props => {
const cartCtx = useContext(CartContext)

  const cartItemRemoveHandler = id =>{
      cartCtx.removeItem(id)
  };

  const cartItemAddHandler = item=>{
      cartCtx.addItem(item)

  }
   const orderHandler =()=>{
    
   }
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartItems = cartCtx.items.map((item)=>
    <CartItem key={item.id} 
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
    /> ) 
    const hasItems = cartItems.items?.length > 0;
    return <Modals onClick={props.onClose}>
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>    
        </div>
       <Checkout/> 
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>    
    </Modals>
}

export default Cart