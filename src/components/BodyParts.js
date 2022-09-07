import React from 'react'
import {Stack , Typography} from '@mui/material'

import Icon from '../assets/assets/icons/gym.png'


const BodyParts = ({item , bodypart,setbodypart}) => {
  return (
<Stack  
justifyContent='center' alignItems='center' className='bodyPart-card' type="button" 

sx={{

    borderTop: bodypart === item ? '4px solid #ff2625' : '',
    backgroundColor :'#ff5',
    borderBottomLeftRadius:'20px',
    width:'270px',
    height:'280px',
    cursor:'pointer',
    gap:'47px',
    
}} 
onClick={() => {
   setbodypart(item) ;
   window.scrollTo({top:1800 , left:100 , behavior:'smooth'})
}}
>
<img src={Icon} alt="dumbbell" style={{width:'40px' , height:'40px'}} />
<Typography>{item}</Typography>
</Stack>
    
    
      )
}

export default BodyParts