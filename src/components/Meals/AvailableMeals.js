import React, { useEffect ,useLayoutEffect,useState} from 'react'
import { DUMMY_MEALS } from './dummyMeal'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from '../MealItem/MealItem'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const AvailableMeals = () => {
  const [meals,setMealsData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [httpError,setHttpError] = useState()
 
  useLayoutEffect(()=>{   
      const fetchMeals = async ()=>{    
       const response = await fetch('https://instant-ground-308109-default-rtdb.firebaseio.com/meals.json')
       if(!response.ok){
            throw new Error('Something went wrong ')        

       }
       

       const responseData = await response.json()
       const loadedMeals = []
          for(const key in responseData){
            const res = responseData[key]
            loadedMeals.push(
            {
              id:key,
              name:res.name,
              description:res.description,
              price:res.price
            }
          )
          }
          console.log("loadedMeals====>",loadedMeals)
          setMealsData(loadedMeals)
          setIsLoading(false)

      }
      
      fetchMeals().catch((error)=>{
        setIsLoading(false)
        setHttpError(error.message)
       
      })
      

    },[])


    if(isLoading){
      return <section className={classes.mealsLoading}> 
        <p>Loading.....</p>
      </section>
    }
    if(httpError){
      return <section className={classes.mealsError}> 
      <p>{httpError}</p>
    </section>
    }


    const mealList = meals.map((meal)=>{
        return<MealItem  id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    })
  return(
    <ErrorBoundary>
    <section className={classes.meals}>
    <Card>
      <ul>
          {
             mealList
          }
      </ul>
      </Card>
  </section>
  </ErrorBoundary>
)}

export default AvailableMeals