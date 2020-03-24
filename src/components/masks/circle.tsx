import React from 'react'

const Circle = (props: any) => {
  return (
    <defs>
      <clipPath clipPathUnits="objectBoundingBox" id={props.type}>
        <path className="style-scope image-mask" d="M 0.5, 0.5 m -0.5, 0 a 0.5, 0.5 0 1, 0 1, 0 a 0.5, 0.5 0 1, 0 -1, 0"></path>
      </clipPath>
    </defs>
  )
}

export default Circle;