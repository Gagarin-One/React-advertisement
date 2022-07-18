import React from "react";
import VButton from "../../../Etc/ViewButton/ResultButton";
import s from "./CamerasFilter.module.scss"
import Select, { OnChangeValue } from 'react-select'
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import { MainSlice } from "../../../../Store/Reducers/AppSlice";

const CamerasFilter = ( ) => {

  type Option = {value: string, label: string}
  const dispatch = useAppDispatch()
  const {changeDopeFilterSelect} = MainSlice.actions
  const {changeFilterSelect} = MainSlice.actions
  const {filterData} = useAppSelector(state => state.mainReducer)
  const {changeFilterCheckbox} = MainSlice.actions
  const {removeFilterCheckbox} = MainSlice.actions
  const onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeFilterSelect(selectedOption!.value)) 
  }
  const DopeOnHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeDopeFilterSelect(selectedOption!.value)) 
  }
  const matrixOptions = [
    { value: '27.9×8.16', label: '27.9×8.16' },
    { value: '36×23.9', label: '36×23.9' },
    { value: '53.7×40.2', label: '53.7×40.2' }
  ]
  const resolutionOptions = [
    { value: '640×480', label: '640×480'},
    { value: '1024×600', label: '1024×600' },
    { value: '1280×720', label: '1280×720' },
    { value: '1920×1080', label: '1920×1080' },
  ]
  const checkboxChange = (checkbox:string) => {     //можно вынести
    filterData.checkbox && 
    filterData.checkbox.some((item:string) => item === checkbox) ?
    dispatch(removeFilterCheckbox(checkbox)):
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