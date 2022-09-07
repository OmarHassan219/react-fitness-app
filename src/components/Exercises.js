import React,{useEffect,useState} from 'react'
import { Pagination } from '@mui/material'
import { Box,Stack,Typography } from '@mui/material'

import { exerciseOptions,fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises, setexercises,bodypart}) => {

  const [currentPage, setcurrentPage] = useState(1)
  const exercisesperPage = 9
  
  const indexOfLastExercise = currentPage * exercisesperPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesperPage
  
  
  
  
  
  const paginate = (e,value) => {
  
    setcurrentPage(value)
    window.scrollTo({top:1800 , behavior:'smooth'})
  
  }


useEffect(() => {
  const fetchexerciseData = async () => {
    
    let exerciseData = []
    
    if(bodypart === 'all'){
      exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)

    }
    else{
      exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,exerciseOptions)

    }
    setexercises(exerciseData)
  }
  
  
  
  
  fetchexerciseData()
  
  
}, [bodypart])

  const currentExercises = Array.from(exercises).slice(indexOfFirstExercise , indexOfLastExercise)


  return (
    <Box id="exercises" sx={{mt:{lg:'110px'}}} mt="50px" p="20px" >

<Typography variant="h3" mb="46px" textAlign='center' >

Showing Results

</Typography>
<Stack direction="row" sx={{gap:{lg:'110px' ,xs:'50px' }}}

flexWrap="wrap" justifyContent="center"

>
{currentExercises.map((exercise , index)=> (


<ExerciseCard key={index} exercise={exercise} />

))}


</Stack>
<Stack mt="100px" alignItems='center'  >
  {exercises.length > 9 && (            

<Pagination       

color="standard"
shape="rounded"
defaultPage={1}
count={Math.ceil(exercises.length / exercisesperPage)}
page={currentPage}
onChange={paginate}
size="large"

/>



  )  }

</Stack>

    </Box>
  )
}

export default Exercises