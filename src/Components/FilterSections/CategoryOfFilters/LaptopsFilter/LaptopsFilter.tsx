import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../Store/hooks";
import { MainSlice } from "../../../../Store/Reducers/AppSlice";
import Checkbox from "../../../Additional components/Checkbox/Checkbox";
import Switch from "../../../Additional components/Switch/Switch";
import s from "./LaptopsFilter.module.scss"

const LaptopsFilter = () => {
  const dispatch = useAppDispatch()
  const {changeFilterSwitch} = MainSlice.actions
  const {changeDopeFilterSwitch} = MainSlice.actions
  const {changeFilterCheckbox} = MainSlice.actions
  const {changeDopeFilterCheckbox} = MainSlice.actions

  const checkboxChange = (checkbox:string) => {    
    dispatch(changeFilterCheckbox(checkbox))
  }
  const DopeCheckboxChange = (checkbox:string) => { 
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
  const laptopArr = [
    {checkboxName: 'ultrabook', checkboxTitle:'Ультрабук'},
    {checkboxName: 'home laptop', checkboxTitle:'Домашний ноутбук'},
    {checkboxName: 'gaming laptop', checkboxTitle:'Игровой ноутбук'},
  ]
  const cpuArr = [
    {checkboxName: 'i3', checkboxTitle:'Intel Core i3'},
    {checkboxName: 'i5', checkboxTitle:'Intel Core i5'},
    {checkboxName: 'i7', checkboxTitle:'Intel Core i7'},
    {checkboxName: 'm1', checkboxTitle:'Apple M1'}
  ]
  
  
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Тип ноутбука</p>
      <Checkbox arrayOfUnits={laptopArr} checkboxChange={checkboxChange}/>
      
      <p className={s.title}>Минимальный объём оперативной памяти</p>
      <Switch arrayOfUnits={MemoryArr} onSwitchChange={onMemoryChange}/>

      <p className={s.title}>Минимальная диагональ экрана</p>
      <Switch arrayOfUnits={DiagonalArr} onSwitchChange={onDiaganalChange}/>
      
      <p className={s.title}>Tип процессора</p>
      <Checkbox arrayOfUnits={cpuArr} checkboxChange={DopeCheckboxChange}/>
      
    </div>
  )
}
export default LaptopsFilter