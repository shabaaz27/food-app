import React from 'react'
import mealsImage from '../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCart from './HeaderCart'

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Choose Your Food</h1>
            <HeaderCart onClick={props.onShowCart} />
        </header> 
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Meals Picture"/>
        </div>  
    </React.Fragment>
  )
}

export default Header