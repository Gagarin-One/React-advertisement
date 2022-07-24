import React, { useEffect } from "react";
import s from './EstateFilter.module.scss'
import Select, { OnChangeValue } from 'react-select'
import VButton from "../../../Etc/ViewButton/ResultButton";
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import { MainSlice } from "../../../../Store/Reducers/AppSlice";
import { FetchAds } from "../../../../Store/Reducers/actionCreators";

const EstateFilter = () => {
  type Option = {value: number, label: string}
  const dispatch = useAppDispatch()
  const {changeFilterSwitch} = MainSlice.actions
  const {changeFilterSelect} = MainSlice.actions
  const {filterData} = useAppSelector(state => state.mainReducer)
  const {changeFilterCheckbox} = MainSlice.actions

  useEffect(() => {
    dispatch(FetchAds('Estate'))
    dispatch(changeFilterSelect(20))
  },[])

  let onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeFilterSelect(selectedOption!.value)) 
  }
  const options = [
    { value: 20, label: '20' },
    { value: 40, label: '40' },
    { value: 60, label: '60' },
    { value: 100, label: '100' },
    { value: 120, label: '120' }
  ]

  const onRoomsChange = (rooms:string) => {
    dispatch(changeFilterSwitch(rooms))
  }

  const checkboxChange = (checkbox:string) => {     //можно вынести
    dispatch(changeFilterCheckbox(checkbox))
  }

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Тип недвижимости</p>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('house')} className={s.myinput}/>
        <p>Дом</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('flat')} className={s.myinput}/>
        <p>Квартира</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('apartment')} className={s.myinput}/>
        <p>Апартаменты</p>
      </div>
      <p className={s.title}>Минимальная площадь,м²</p>
      <Select 
        className={s.select}
        onChange={onHandleChange}
        options={options}
        defaultValue={options[0]}
      />
      <p className={s.title}>Колличество комнат</p>
      <div className={s.rooms}>
        <button onClick={() => onRoomsChange('any')}>Любое</button>
        <button onClick={() => onRoomsChange('1')}>1</button>
        <button onClick={() => onRoomsChange('2')}>2</button>
        <button onClick={() => onRoomsChange('3')}>3</button>
        <button onClick={() => onRoomsChange('4')}>4</button>
        <button onClick={() => onRoomsChange('5+')}>5+</button>
      </div>
    </div>
  )
}
export default EstateFilter