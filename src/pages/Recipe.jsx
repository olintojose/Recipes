import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Recipe = () => {

    let params = useParams();
    const[details, setDetails] = useState();

    const fetchDetails = async (name) => {
    const data = await fetch(` https://api.spoonacular.com/recipes/${params.name}/information?apiKey=bedc93bcde1e4c61ba21daf599ef10dc`)
      const detailRecipe = await data.json();
      setDetails(detailRecipe)
      console.log(details)
    
    }

    useEffect(() => {
        fetchDetails();
    },[params.name])

  return (
    <div>Recipe</div>
  )
}

export default Recipe