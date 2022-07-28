import React, { useEffect, useState } from "react";
import s from "./CarsFilter.module.scss"
import Select, { OnChangeValue } from 'react-select'
import { useAppDispatch } from '../../../../Store/hooks';
import {MainSlice, OptionNum} from '../../../../Store/Reducers/AppSlice';
import Switch from "../../../Additional components/Switch/Switch";
import Checkbox from "../../../Additional components/Checkbox/Checkbox";

const CarsFilter = ( ) => {
  const dispatch = useAppDispatch()
  const {changeFilterSelect} = MainSlice.actions
  const {changeFilterSwitch} = MainSlice.actions
  const {changeFilterCheckbox} = MainSlice.actions
  
  const onHandleChange = (selectedOption : OnChangeValue<OptionNum, false>) => {
    dispatch(changeFilterSelect(selectedOption!.value))
  }

  const options = [
    { value: 1990, label: '1990' },
    { value: 2000, label: '2000' },
    { value: 2005, label: '2005' },
    { value: 2010, label: '2010' },
    { value: 2020, label: '2020' }
  ]

  const SwitchArr = [
  {switchName:'any',switchTitle:"Любая"},
  {switchName:'auto',switchTitle:"Автомат"},
  {switchName:'mech',switchTitle:"Механика"},]

  const CheckboxArr = [
    {checkboxName: 'sedan', checkboxTitle:'Седан'},
    {checkboxName: 'universal', checkboxTitle:'Универсал'},
    {checkboxName: 'hatchback', checkboxTitle:'Хэтчбэк'},
    {checkboxName: 'off-road', checkboxTitle:'Внедорожник'},
    {checkboxName: 'cope', checkboxTitle:'Купе'},
  ]

  const checkboxChange = (checkbox:string) => {
    dispatch(changeFilterCheckbox(checkbox))
  }
  
  const switchChange = (switchHandle:string) => {
    dispatch(changeFilterSwitch(switchHandle))
  }
  return ( 
    <div className={s.wrapper}>

      <p className={s.title}>Минимальный год выпуска</p>
      <Select 
        className={s.select}
        onChange={onHandleChange}
        options={options}
        defaultValue={options[0]}
      />

      <p className={s.title}>Коробка передач</p>
      <Switch arrayOfUnits={SwitchArr} onSwitchChange={switchChange}/>

      <p className={s.title}>Тип кузова</p>
      <Checkbox arrayOfUnits={CheckboxArr} checkboxChange={checkboxChange}/>
    </div>
  )
}
export default CarsFilter