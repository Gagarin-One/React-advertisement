import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import { FetchAds } from "../../../../Store/Reducers/actionCreators";
import { MainSlice } from "../../../../Store/Reducers/AppSlice";
import Switch from "../../../Etc/Switch/Switch";
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
  const MemoryArr = [
    {switchName:'any',switchTitle:"Любой"},
    {switchName:'4',switchTitle:"4"},
    {switchName:'8',switchTitle:"8"},
    {switchName:'16',switchTitle:"16"},
  ]
  const DiagonalArr = [
    {switchName:'any',switchTitle:"Любая"},
    {switchName:'13',switchTitle:"13"},
    {switchName:'15',switchTitle:"15"},
    {switchName:'16',switchTitle:"16"},
  ]
  
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

      <p className={s.title}>Минимальный объём оперативной памяти</p>
      <Switch arrayOfUnits={MemoryArr} onSwitchChange={onMemoryChange}/>

      <p className={s.title}>Минимальная диагональ экрана</p>
      <Switch arrayOfUnits={DiagonalArr} onSwitchChange={onDiaganalChange}/>
      
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