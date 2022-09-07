import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import BodyParts from './BodyParts'
import RightArrowIcon from '../assets/assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png'
import ExerciseCard from './ExerciseCard'


function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Typography disabled={isFirstItemVisible}  onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left" />
    </Typography>
  );
}
function RightArrow() {
  const { isLastItemVisible	, scrollNext } =
    React.useContext(VisibilityContext);

  return (
    <Typography disabled={isLastItemVisible	} onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right" />
    </Typography>
  );
}










const HorizontalScrollbar = ({data , bodypart , setbodypart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

{data.map((item) => (

<Box key={item.id || item}
 itemId={item.id || item}
 title={item.id || item}
 m='0 40px'
 >
    {isBodyParts ?<BodyParts item={item}  bodypart={bodypart} setbodypart={setbodypart}/> : <ExerciseCard  exercise={item} /> }

</Box>

))}

    </ScrollMenu>
  )
}

export default HorizontalScrollbar