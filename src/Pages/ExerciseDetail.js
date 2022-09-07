import React,{useState,useEffect}from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {fetchData , exerciseOptions, YoutubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

  const [exerciseDetail, setexerciseDetail] = useState({})
  const [exerciseYOUTUBEVIDEOS, setexerciseYOUTUBEVIDEOS] = useState([])
  const [targetMuscleex, settargetMuscleex] = useState([])
  const [equipmentex, setequipmentex] = useState([])
  const {id} = useParams()

useEffect(() => {
  
  const fetchExercisesData = async() => {

    const exercisedbUrl = 'https://exercisedb.p.rapidapi.com'
    const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

    const ExerciseDetailData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`,exerciseOptions)

    setexerciseDetail(ExerciseDetailData)


const exerciseVideoData = await fetchData (`${YoutubeSearchUrl}/search?query=${ExerciseDetailData.name}`,YoutubeOptions)
setexerciseYOUTUBEVIDEOS(exerciseVideoData.contents)


const targetMuscleExerciseData = await fetchData(`${exercisedbUrl}/exercises/target/${ExerciseDetailData.target}`, exerciseOptions)
// console.log(targetMuscleex , 'muscleex')

const equipmentExerciseData = await fetchData(`${exercisedbUrl}/exercises/equipment/${ExerciseDetailData.equipment}`, exerciseOptions)
setequipmentex(equipmentExerciseData)
settargetMuscleex(targetMuscleExerciseData)

console.log(ExerciseDetailData)



  }

  fetchExercisesData()
  
}, [id])


  return (


<Box>
<Detail exerciseDetail={exerciseDetail} />
<ExerciseVideos  exerciseYOUTUBEVIDEOS={exerciseYOUTUBEVIDEOS}  name={exerciseDetail.name}  />
<SimilarExercises targetMuscleex={targetMuscleex}  equipmentex={equipmentex} />




</Box> 
 )
}

export default ExerciseDetail