import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import HorizontalScrollbar from '../components/HorizontalScrollbar'
import Loader from '../components/Loader'



const SimilarExercises = ({targetMuscleex,equipmentex}) => {
  return (
<Box sx={{mt: {lg:'100px' , xs:'0'}}}>
<Typography variant='h3' mb={5} >Exercises that target the same muscle group
</Typography>
<Stack  direction='row' sx={{p:'2' , postion:"relative"}} >
{targetMuscleex.length ? <HorizontalScrollbar data={targetMuscleex}/> : <Loader/> }
</Stack>
<Typography variant='h3' mb={5} >Exercises that use the same equipment
</Typography>
<Stack  direction='row' sx={{p:'2' , postion:"relative"}} >
{equipmentex.length ? <HorizontalScrollbar data={equipmentex}/> : <Loader/> }
</Stack>




</Box>



  )
}

export default SimilarExercises