import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodypart, setbodypart] = useState('all')
  const [exercises, setexercises] = useState([])

  return (
<Box>
<HeroBanner/>
<SearchExercises setexercises={setexercises} setbodypart={setbodypart}  bodypart={bodypart}/>
<Exercises      setexercises={setexercises} exercises={exercises}  bodypart={bodypart}   />



</Box>


    )
}

export default Home