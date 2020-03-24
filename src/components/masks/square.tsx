import React from 'react'

const Square = (props: any) => {
  return (
    <defs>
      <clipPath clipPathUnits="objectBoundingBox" id={props.type}>
        <path className="style-scope image-mask" d="M 0 0, 1 0, 1 1, 0 1 z"></path>
      </clipPath>
    </defs>
  )
}

export default Square;