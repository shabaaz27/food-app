import React,{useContext,useEffect,useState} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCard.module.css'

const HeaderCart = (props) => {
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);


  const numberOfCartItems = cartCtx.items.reduce((currNumber,item)=>{
      return currNumber + item.amount
  },0)

  const {items} = cartCtx

  const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if(items.length === 0) return  
    setBtnIsHighlighted(true)
   
   const btnBumpTime = setTimeout(()=>{
        setBtnIsHighlighted(false)
    },300)

    return ()=>{
        clearTimeout(btnBumpTime)
    }
   
  }, [items])
  

  return <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon} >
          <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
          {numberOfCartItems}
      </span>
     
  </button>
}

export default HeaderCart