import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import { FetchAds } from "../../../../Store/Reducers/actionCreators";
import { MainSlice } from "../../../../Store/Reducers/AppSlice";
import s from "./LaptopsFilter.module.scss"
const LaptopsFilter = () => {
  const dispatch = useAppDispatch()
  const {changeFilterSwitch} = MainSlice.actions
  const {changeDopeFilterSwitch} = MainSlice.actions
  const {changeFilterSelect} = MainSlice.actions
  const {filterData} = useAppSelector(state => state.mainReducer)
  const {changeFilterCheckbox} = MainSlice.actions
  const {changeDopeFilterCheckbox} = MainSlice.actions

  useEffect(() => {
    dispatch(FetchAds('Laptops'))
  },[])

  const checkboxChange = (checkbox:string) => {     //можно вынести
    dispatch(changeFilterCheckbox(checkbox))
  }
  const DopeCheckboxChange = (checkbox:string) => {     //можно вынести
    dispatch(changeDopeFilterCheckbox(checkbox))
  }
  const onMemoryChange = (memory:string) => {
    dispatch(changeFilterSwitch(memory))
  }
  const onDiaganalChange = (size:string) => {
    dispatch(changeDopeFilterSwitch(size))
  }
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Тип ноутбука</p>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('ultrabook')} className={s.myinput}/>
        <p>Ультрабук</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('home laptop')} className={s.myinput}/>
        <p>Домашний ноутбук</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox'  onChange={() =>checkboxChange('gaming laptop')} className={s.myinput}/>
        <p>Игровой ноутбук</p>
      </div>
      <p className={s.minChoiceTitle}>Минимальный объём оперативной памяти</p>
      <div className={s.memory}>
        <button onClick={() => onMemoryChange('any')}>Любой</button>
        <button  onClick={() => onMemoryChange('4')}>4 гб</button>
        <button onClick={() => onMemoryChange('8')}>8 гб</button>
        <button onClick={() => onMemoryChange('16')}>16 гб</button>
      </div>
      <p className={s.minChoiceTitle}>Минимальная диагональ экрана</p>
      <div className={s.diagonal}>
        <button onClick={() => onDiaganalChange('any')}>Любой</button>
        <button onClick={() => onDiaganalChange('13')}>13'</button>
        <button onClick={() => onDiaganalChange('15')}>15'</button>
        <button onClick={() => onDiaganalChange('16')}>16'</button>
      </div>
      
      <p className={s.title}>Tип процессора</p>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>DopeCheckboxChange('i3')} className={s.myinput}/>
        <p>Intel Core i3</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>DopeCheckboxChange('i5')} className={s.myinput}/>
        <p>Intel Core i5</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>DopeCheckboxChange('i7')} className={s.myinput}/>
        <p>Intel Core i7</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>DopeCheckboxChange('m1')} className={s.myinput}/>
        <p>Apple M1</p>
      </div>
    </div>
  )
}
export default LaptopsFilter