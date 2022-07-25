import React, { useEffect } from "react";
import VButton from "../../../Etc/ViewButton/ResultButton";
import s from "./CamerasFilter.module.scss"
import Select, { OnChangeValue } from 'react-select'
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import { MainSlice } from "../../../../Store/Reducers/AppSlice";
import { FetchAds } from "../../../../Store/Reducers/actionCreators";

const CamerasFilter = ( ) => {

  type Option = {value: number, label: string}
  const dispatch = useAppDispatch()
  const {changeDopeFilterSelect} = MainSlice.actions
  const {changeFilterSelect} = MainSlice.actions
  const {filterData} = useAppSelector(state => state.mainReducer)
  const {changeFilterCheckbox} = MainSlice.actions

  useEffect(() => {
    
    dispatch(FetchAds('Cameras'))
  },[])

  const onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeFilterSelect(selectedOption!.value)) 
  }
  const DopeOnHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeDopeFilterSelect(selectedOption!.value)) 
  }
  const matrixOptions = [
    { value: 27, label: '27.9×8.16' },
    { value: 36, label: '36×23.9' },
    { value: 53, label: '53.7×40.2' }
  ]
  const resolutionOptions = [
    { value: 640, label: '640×480'},
    { value: 1024, label: '1024×600' },
    { value: 1280, label: '1280×720' },
    { value: 1920, label: '1920×1080' },
  ]
  const checkboxChange = (checkbox:string) => {     //можно вынести
    dispatch(changeFilterCheckbox(checkbox))
  }
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Тип фотоаппарата</p>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('mirrored')} className={s.myinput}/>
        <p>Зеркальный</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('digital')} className={s.myinput}/>
        <p>Цифровой</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' onChange={() =>checkboxChange('mirrorless')} className={s.myinput}/>
        <p>Беззеркальный</p>
      </div>
      <p className={s.title}>Минимальное разрешение матрицы</p>
      <Select 
        className={s.select}
        onChange={onHandleChange}
        options={matrixOptions}
        defaultValue={matrixOptions[0]}
      />
      <p className={s.title}>Минимальное разрешение видео</p>
      <Select 
        className={s.select}
        onChange={DopeOnHandleChange}
        options={resolutionOptions}
        defaultValue={resolutionOptions[0]}
      />
      
    </div>
  )
}
export default CamerasFilter