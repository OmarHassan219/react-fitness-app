import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

const ExerciseVideos = ({exerciseYOUTUBEVIDEOS,name}) => {
  return (
<Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p="20px" >
    <Typography variant="h4" mb="45px">
        Watch <span style={{color:'red' ,textTransform:'capitalize'}} >{name}</span> exercise videos
    </Typography>
<Stack justifyContent='center' flexWrap='wrap' alignItems="center" sx={{flexDirection:{lg:'row'}, gap:{lg:'100px' , xs:'0'}}}>

{exerciseYOUTUBEVIDEOS?.slice(0,6).map((video,index) => ( 
<a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${video.video.videoId}`}

target="_blank"

rel="noreferrer"

>
<img src={video.video.thumbnails[0].url} style={{maxWidth:'350px',maxHeight:'350px'}} alt={video.video.title} />
<Typography color="#000" variant="h6" marginBottom='0'  >{video.video.title}</Typography>
<Typography color="#ff0000" mt="0" fontSize="15px"  >by {video.video.channelName} | {video.video.viewCountText}</Typography>

</a>


 ))}

</Stack>



</Box>  )
}

export default ExerciseVideos