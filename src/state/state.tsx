
export interface ICardProps {
  id: String,
  img: String,
  title: String,
  text: String,
  className: String,
  imgWrapStyle: {
    backgroundColor: any
  },
  mask: String,
  maskWidth: String,
  maskHeight: String,
}

export interface IColCardProps {
  className: String,
  cardProps: ICardProps
}


export const bigTop: IColCardProps[] = [
  {
    className: 'w50p w100p-xs mb--more-small mb--more-big-xs',
    cardProps: {
      id: '1',
      img: '/img/img-1.png',
      title: 'Невьянская башня',
      text: 'Остатки прошлого величия промышленников Демидовых',
      className: 'big first ',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: 'circle',
      maskWidth: '100%',
      maskHeight: '100%'
    }
  },
  { 
    className: 'w50p w100p-xs mb--more-small mb--more-medium-xs',
    cardProps: {
      id: '2',
      img: '/img/gan-2.png',
      title: 'Ганина яма',
      text: 'В 1918 году в шахту бросили останки представителей царской династии Романовых',
      className: 'big second',
      imgWrapStyle: {
        backgroundColor: 'white'
      },
      mask: 'dome',
      maskWidth: '100%',
      maskHeight: '100%'
    }
  },
]

export const stateTop: IColCardProps[] = [
  
  { 
    className: 'w25p w275-fix-xs mb--more-medium',
    cardProps: {
      id: '3',
      img: '/img/img-3.png',
      title: 'Верхотурье',
      text: 'Духовный центр России',
      className: '',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  },
  { 
    className: 'w25p w275-fix-xs mb--more-medium',
    cardProps: {
      id: '4',
      img: '/img/img-4.png',
      title: 'Аркаим',
      text: 'Город древних цивилизаций',
      className: '',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  },
  {
    className: 'w25p w275-fix-xs mb--more-medium',
    cardProps: {
      id: '5',
      img: '/img/img-5.png',
      title: 'Оленьи ручьи',
      text: 'Красивый парк с памятниками древней истории',
      className: 'status-kids',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  },
  { 
    className: 'w25p w275-fix-xs mb--more-medium',
    cardProps: {
      id: '6',
      img: '/img/img-6.png',
      title: 'Конжаковский камень',
      text: 'Высшая точка Свердловской области',
      className: '',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  },
  { 
    className: 'w25p w275-fix-xs',
    cardProps: {
      id: '7',
      img: '/img/img-7.png',
      title: 'Качканар',
      text: 'Причудливые скальные останцы и буддийский монастырь',
      className: '',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  },
  { 
    className: 'w25p w275-fix-xs',
    cardProps: {
      id: '8',
      img: '/img/img-8.png',
      title: 'Зюраткуль',
      text: 'Горный хребет и озеро',
      className: 'status-basko',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  },
  { 
    className: 'w25p w275-fix-xs',
    cardProps: {
      id: '9',
      img: '/img/img-9.png',
      title: 'Аракульский',
      text: 'Шихан Живописная скальная стена с причудливыми формами',
      className: '',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  },
  { 
    className: 'w25p w275-fix-xs',
    cardProps: {
      id: '10',
      img: '/img/img-10.png',
      title: 'Граница европы и Азии',
      text: 'Монументы и стеллы на магистралях',
      className: '',
      imgWrapStyle: {
        backgroundColor: 'transparent'
      },
      mask: '',
      maskWidth: '',
      maskHeight: ''
    }
  }
   

] 

export const stateMasked: IColCardProps[] = [
  { 
    className: 'w33p w275-fix-xs',
    cardProps: {
      id: '',
      img: '/img/img-11.png',
      title: '10 мест для прогулок',
      text: 'Парки, тихие улицы, чтобы отправиться на пробежку или плэнер',
      className: 'masked mask-triangle status-route',
      imgWrapStyle: {
        backgroundColor: '#82CA9C'
      },
      mask: 'triangle',
      maskWidth: '90%',
      maskHeight: '80%',
    }
  },
  { 
    className: 'w33p w275-fix-xs',
    cardProps: {
      id: '',
      img: '/img/img-12.png',
      title: 'Где пробовать настоящую уральскую кухню',
      text: 'Пельмени, кулебяки шаньги: традиционные рецепты народов Урала',
      className: 'masked mask-circle status-route',
      imgWrapStyle: {
        backgroundColor: '#F8AA9E'
      },
      mask: 'circle',
      maskWidth: '82%',
      maskHeight: '82%',
    }
  },
  { 
    className: 'w33p w275-fix-xs',
    cardProps: {
      id: '',
      img: '/img/img-13.png',
      title: 'Портал',
      text: 'Арт-объект фестиваля Стеннография',
      className: 'masked mask-square',
      imgWrapStyle: {
        backgroundColor: '#008066'
      },
      mask: 'square',
      maskWidth: '80%',
      maskHeight: '80%',

    }
  }
]