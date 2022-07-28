import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../Store/hooks";
import { ContentType} from "../../Store/Reducers/AppSlice";
import ItemWindow from "../ItemSlider/ItemWindow";
import s from './Content.module.scss'

type content = {array:Array<ContentType>}

const Content:FC<content> = ({array}) => {
  const {isLoading} = useAppSelector(state => state.mainReducer)
  const {ads} = useAppSelector(state => state.mainReducer)

  let [isOpen,setIsOpen] = useState(false)
  let [currentAd , setCurrentAd] = useState(ads[0])

  useEffect(() => {
    isOpen ? document.body.style.overflow = 'hidden':
    document.body.style.overflow = 'unset';
  }, [isOpen]);

  const changeWindow = () => {
    isOpen ? setIsOpen(false): setIsOpen(true) 
  }

  const openWindow = (ad:ContentType) => {
    setCurrentAd(ad)
    changeWindow()
  }

  return(
    <div className={s.wrapper}>
      <div>{
      isOpen && 
      <ItemWindow 
      changeWindow={changeWindow} 
      itemData={currentAd}/>
      }</div>
      <div style={{width:'850px'}}>
        <p className={s.title}>Результаты</p>
      </div>
      <div>{
      isLoading ?
       <img className={s.preloader} src='img/loading.gif'/> : 
       <div className={s.items}>{
       array.map((item) => {
          return <div 
          key={item.id} 
          className={s.itemWrapper} 
          onClick={() => openWindow(item)}
          >
          <img className={s.mainImg} src={item.img}/>
          <div className={s.itemContent}>
            <p className={s.itemTitle}>{item.title}</p>
            <p className={s.price}>{item.price}₽</p>
            <div className={s.location}>
              <img width="24" height="24"  src='img/location.svg'/>
              <p>{item.location}</p>
            </div>
            <p className={s.date}>{item.date}</p>
          </div>
      </div>
      })}
      </div>}
      </div>
    </div>
  )
   }
export default Content