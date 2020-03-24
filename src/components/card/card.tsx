import React, { useEffect, useRef } from 'react'

import Mask from '../masks/mask'
import './card.css'

const Card = (props: any) => {

  const cardRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let card: any = cardRef.current;
    props.callback &&  props.callback.call(props.context, card.offsetHeight+40)
  }, [])

  const cardStyle = `card ${props.cardProps.className}`;
  
  return (
    <div className={cardStyle} ref={cardRef}>
      <div className="card__inner">
        <div className="card__img-wrapper" style={{...props.cardProps.imgWrapStyle}}>
          <span className="card__img-decore"></span>
          <span className="card__id">{props.cardProps.id.length > 0 && props.cardProps.id}</span>
          {props.cardProps.mask.length > 0 &&
            <Mask width={props.cardProps.maskWidth} 
                  height={props.cardProps.maskHeight}
                  img={props.cardProps.img}
                  type={props.cardProps.mask} />
          }
          
          
          {props.cardProps.mask.length === 0 &&
            <img className="card__img" src={`${props.cardProps.img}`} alt={`${props.cardProps.img}`}/>
          }
          
        </div>

        <div className="card__info">
          <span className="card__title">{props.cardProps.title}</span>
          <span className="card__text">{props.cardProps.text}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;