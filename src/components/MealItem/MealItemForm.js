import React,{useState} from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState(true)
  const amountInputRef = React.useRef();


    const submitHandler = event =>{
      event.preventDefault()

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;
        console.log(enteredAmount,+enteredAmount)
      if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
          {
            setAmountIsValid(false)
            return;
          }
          props.onAddToCart(enteredAmountNumber)
    }

  return ( 
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" ref={amountInputRef} input={{
          id: 'amount_' + props.id,
          min:'1',
          max:'5',
          type:"number",
          step:'1',
          default:'1'

        }}/>
        <button> + Add </button>
        {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
  )
}

export default MealItemForm