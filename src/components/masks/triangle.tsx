import React from 'react'

const Triangle = (props: any) => {
  return (
    <defs>
      <clipPath clipPathUnits="objectBoundingBox" className="style-scope image-mask" id={props.type}>
        <path className="style-scope image-mask" d="M 0 1, 0.5 0, 0.5 0, 1 1 z"></path>
      </clipPath>
    </defs>
  )
}

export default Triangle;