import React from 'react'
import { DUMMY_MEALS } from './dummyMeal'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from '../MealItem/MealItem'

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal)=>{
        return<MealItem  id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    })
  return <section className={classes.meals}>
    <Card>
      <ul>
          {
             mealList
          }
      </ul>
      </Card>
  </section>
}

export default AvailableMeals