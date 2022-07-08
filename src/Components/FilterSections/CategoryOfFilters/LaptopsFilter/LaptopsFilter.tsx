import React from "react";
import VButton from "../../../Etc/ViewButton/ResultButton";
import s from "./LaptopsFilter.module.scss"
const LaptopsFilter = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Тип ноутбука</p>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Ультрабук</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Домашний ноутбук</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Игровой ноутбук</p>
      </div>
      <p className={s.minChoiceTitle}>Минимальный объём оперативной памяти</p>
      <div className={s.memory}>
        <p>Любой</p>
        <p>4 гб</p>
        <p>8 гб</p>
        <p>16 гб</p>
      </div>
      <p className={s.minChoiceTitle}>Минимальная диагональ экрана</p>
      <div className={s.diagonal}>
        <p>Любой</p>
        <p>13'</p>
        <p>14'</p>
        <p>16'</p>
      </div>
      
      <p className={s.title}>Tип процессора</p>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Intel Core i3</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Intel Core i5</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Intel Core i7</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Apple M1</p>
      </div>
    </div>
  )
}
export default LaptopsFilter