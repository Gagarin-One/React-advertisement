import React from "react";
import s from './ItemSlider.module.scss'
//переименовать компонент
//and svg for close
const ItemWindow = () => {
  return(
    <div className={s.wrapper}>
      <div className={s.header}>
        <p className={s.date}>30 december</p>
        <p className={s.title}>title</p>
        <p className={s.price}>price</p>
      </div>
      <button className={s.closeWindow}></button> 
    </div>
  )
}
export default ItemWindow