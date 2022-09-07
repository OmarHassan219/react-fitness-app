import React,{useEffect,useState} from 'react'
import {Box,Typography,Button,TextField,Stack} from "@mui/material"
import { fetchData , exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setexercises , bodypart , setbodypart , }) => {
const [search, setsearch] = useState('')
const [BodyParts, setBodyParts] = useState([])

useEffect(() => {

  const fetchExercises = async() => {
    const bodypartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
    setBodyParts(['all',...bodypartsData])
  }

  fetchExercises();

},[])



const handleSearch = async() =>{

    if(search){
   window.scrollTo({top:1800 , left:100 , behavior:'smooth'})

       const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
       
const searchExercise = exerciseData.filter(
(exercise) => exercise.name.toLowerCase().includes(search)
|| exercise.target.toLowerCase().includes(search)
|| exercise.equipment.toLowerCase().includes(search)
||  exercise.bodyPart.toLowerCase().includes(search)

)
setsearch("")
setexercises(searchExercise)

    }

}


  return (
<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
<Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"30px" }}} mb="50px" textAlign="center">
    Awesome Exercises You <br/> Should Know
</Typography>
<Box postion="relative" mb="72px">


<TextField
sx={{input:{fontWeight:'700' ,border:'none' ,borderRadius:'4px'} , 
width:{lg:'800px' , xs:'350px'} , backgroundColor:'#fff',borderRadius:"40px" 

}}
height="76px" value={search} onChange={(e) => {setsearch(e.target.value.toLowerCase())}} placeholder="Search Exercises" type="text"  />

<Button className='search-btn'   onClick={handleSearch}       sx={{bgcolor:'#FF2625' ,color:'#fff' , textTransform:'none', width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px' , xs:'14px'},
height:'56px'}}>Search </Button>

</Box>
<Box sx={{position:'relative' , width:'100%' , p:'20px'}}>

<HorizontalScrollbar data={BodyParts} bodypart={bodypart} setbodypart={setbodypart} isBodyParts />

</Box>
</Stack>


  )
}

export default SearchExercises