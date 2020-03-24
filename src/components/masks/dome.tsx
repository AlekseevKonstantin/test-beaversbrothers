import React from 'react'

const Dome = (props: any) => {
  return (

    <defs className="style-scope image-mask">
      <clipPath clipPathUnits="objectBoundingBox" className="style-scope image-mask" id={props.type}>
        <ellipse cx=".5" cy=".55" rx=".5" ry=".54" />
        <rect x="0" y=".55" width="100" height="50" />
      </clipPath>
    </defs>
  )
}

export default Dome;