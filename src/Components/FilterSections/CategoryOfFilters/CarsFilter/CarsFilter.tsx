import React, { useEffect, useState } from "react";
import s from "./CarsFilter.module.scss"
import Select, { OnChangeValue } from 'react-select'
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import {MainSlice} from '../../../../Store/Reducers/AppSlice';
import { FetchAds } from "../../../../Store/Reducers/actionCreators";
const CarsFilter = ( ) => {
  type Option = {value: number, label: string} //!!! FIXME

  const dispatch = useAppDispatch()
  let {changeFilterSelect} = MainSlice.actions
  let {changeFilterSwitch} = MainSlice.actions
  let {changeFilterCheckbox} = MainSlice.actions
  let {filterData} = useAppSelector(state => state.mainReducer)

  let onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeFilterSelect(selectedOption!.value))
  }

  useEffect(() => {
    dispatch(FetchAds('Cars'))
  },[])

  const options = [
    { value: 1990, label: '1990' },
    { value: 2000, label: '2000' },
    { value: 2005, label: '2005' },
    { value: 2010, label: '2010' },
    { value: 2020, label: '2020' }
  ]

  const checkboxChange = (checkbox:string) => {
    dispatch(changeFilterCheckbox(checkbox))
  }

  const onTransmissionChange = (transmission:string) => {
    dispatch(changeFilterSwitch(transmission))
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
      <div className={s.transmission}>
        <button onClick={() => onTransmissionChange('any')}>Любая</button>
        <button onClick={() => onTransmissionChange('auto')}>Автомат</button>
        <button onClick={() => onTransmissionChange('mech')}>Механика</button>
      </div>
      <p className={s.title}>Тип кузова</p>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('sedan')}className={s.myinput}/>
        <p>Седан</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox'  onChange={() =>checkboxChange('universal')} className={s.myinput}/>
        <p>Универсал</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox'  onChange={() =>checkboxChange('hatchback')} className={s.myinput}/>
        <p>Хэтчбэк</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox'  onChange={() =>checkboxChange('off-road')} className={s.myinput}/>
        <p>Внедорожник</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox'  onChange={() =>checkboxChange('cope')} className={s.myinput}/>
        <p>Купе</p>
      </div>
    </div>
  )
}
export default CarsFilter