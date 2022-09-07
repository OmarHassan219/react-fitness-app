import React from 'react'
import { Typography,Stack,Button } from '@mui/material'

import BodyPartImg from '../assets/assets/icons/body-part.png'
import TargetImage  from '../assets/assets/icons/target.png'
import EquipmentImage from '../assets/assets/icons/equipment.png'


const Detail = ({exerciseDetail}) => {
    const {bodyPart,equipment ,gifUrl: gifurl ,name, target } = exerciseDetail

    const extraDeTAIL = [
{
    icon:BodyPartImg,
    name:bodyPart
},
{
    icon:TargetImage,
    name:target
},
{
    icon:EquipmentImage,
    name:equipment
}



    ]
    
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:"row"} , p:'20px' , alignItems:'center' }}>

<img src={gifurl} alt={name}  loading='lazy' className='detail-image' />
<Stack sx={{ gap:{lg:'35px' , xs:'20px'} }}>
<Typography variant="h3">
{name}
</Typography>
<Typography variant="h6">
    Exercises keep you strong.<span style={{textTransform:"capitalize" , color:'red' , fontWeight:'bold' , fontStyle:'italic'}} >{name}</span> is one of the best exercises to target your <span style={{fontWeight:'bold' , color:'red' , textDecoration:'underline' }}>{target}</span>. It will help you improve your mood and gain energy
</Typography>
{extraDeTAIL.map((item,index) => (
<Stack key={index} direction='row' gap='24px' alignItems='center'  >
    <Button sx={{background:'#fff2db' ,borderRadius:'50%' , width:'100px',height:'100px' }}>
        <img src={item.icon} alt={bodyPart} style={{width:'50px' , height:'50px' }}  />
    </Button>
<Typography variant='h5' textTransform="capitalize">
    {item.name}
</Typography>


</Stack>


)        )}

</Stack>
 

    </Stack>
  )
}

export default Detail