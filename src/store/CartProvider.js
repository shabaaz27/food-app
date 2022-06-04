import {useReducer} from 'react'
import CartContext from "./cart-context";

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action) =>{
            switch(action.type){
                case 'ADD':
                    
                    const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
                    const existingCartItemIndex = state.items.findIndex(
                        (item) => item.id === action.payload.id 
                    ) 
                    console.log('====================================');
                    console.log(action.payload.id);
                    console.log('====================================');
                    console.log('====================================');
                    console.log( state.items.id);
                    console.log('====================================');
                    console.log(existingCartItemIndex)
                   const existingCartItem = state.items[existingCartItemIndex]
                   console.log(existingCartItem)
                    let updatedItems
                    if(existingCartItem){
                       const updatedItem = {
                            ...existingCartItem,
                            amount:existingCartItem.amount + action.payload.amount
                        }
                        updatedItems= [...state.items]
                        updatedItems[existingCartItemIndex] = updatedItem

                    }else{
                        
                        updatedItems = state.items.concat(action.payload);
                    }


                    return {items:updatedItems, totalAmount:updatedTotalAmount}
                case 'REMOVE':
                    const cartItemIndex = state.items.findIndex(item=>item.id === action.payload)
                    const cartItem = state.items[cartItemIndex]
                    const updatedTotalAmounts = state.totalAmount - cartItem.price
                    let updateItemss;
                    if(cartItem.amount === 1){
                        updateItemss = state.items.filter(item=>item.id !== action.payload );
                    }else{
                       const updateItem = {...cartItem,amount:cartItem.amount - 1};
                       updateItemss = [...state.items]
                       updateItemss[cartItemIndex] = updateItem

                    }

                    return {items:updateItemss ,totalAmount: updatedTotalAmounts}    
            default:
                return defaultCartState    
            }
            
} 


const CartProvider = props =>{
    const [cartState,dispatch] = useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler = item =>{
            dispatch({
                type:'ADD',
                payload:item
            })   

    };

    const removeItemFromCartHandler = id =>{
        dispatch({
            type:'REMOVE',
            payload:id
        })   
    }
        const cartContext = {
            items:cartState.items,
            totalAmount:cartState.totalAmount,
            addItem:addItemToCartHandler,
            removeItem:removeItemFromCartHandler,
        }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};




export default CartProvider