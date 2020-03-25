import React, { useState } from 'react'

import Circle from './circle'
import Triangle from './triangle'
import Square from './square'
import Dome from './dome'

const Mask = (props: any) => {
  
  return (
    
    <svg xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        version="1.1" 
        role="img" 
        className="style-scope image-mask card__img mask" 
        preserveAspectRatio={props.width === '100%' ? "none": ''}
        viewBox={`0 0 ${parseInt(props.width)} ${parseInt(props.height)}`} 
        width={props.width} 
        height={props.height}>
      
          {props.type === 'circle' && <Circle type={props.type}/>}
          {props.type === 'triangle' && <Triangle type={props.type}/>}
          {props.type === 'square' && <Square type={props.type} />}
          {props.type === 'dome' && <Dome type={props.type}/>}

        <image height="100%" 
            width="100%" 
            preserveAspectRatio="xMidYMid slice" 
            className="mask-name style-scope image-mask" 
            clipPath={`url(#${props.type})`} 
            xlinkHref={props.img}></image> 
      
    </svg>
    
  )
}

export default Mask;