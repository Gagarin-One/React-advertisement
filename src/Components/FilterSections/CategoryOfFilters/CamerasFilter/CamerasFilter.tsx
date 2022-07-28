import React, { useEffect } from "react";
import s from "./CamerasFilter.module.scss"
import Select, { OnChangeValue } from 'react-select'
import { useAppDispatch } from "../../../../Store/hooks";
import { MainSlice, OptionNum } from "../../../../Store/Reducers/AppSlice";
import Checkbox from "../../../Additional components/Checkbox/Checkbox";

const CamerasFilter = ( ) => {

  const dispatch = useAppDispatch()
  const {changeDopeFilterSelect} = MainSlice.actions
  const {changeFilterSelect} = MainSlice.actions
  const {changeFilterCheckbox} = MainSlice.actions

  const onHandleChange = (selectedOption : OnChangeValue<OptionNum, false>) => {
    dispatch(changeFilterSelect(selectedOption!.value)) 
  }
  const DopeOnHandleChange = (selectedOption : OnChangeValue<OptionNum, false>) => {
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

  const CheckboxArr = [
    {checkboxName: 'mirrored', checkboxTitle:'Зеркальный'},
    {checkboxName: 'digital', checkboxTitle:'Цифровой'},
    {checkboxName: 'mirrorless', checkboxTitle:'Беззеркальный'}
  ]

  const checkboxChange = (checkbox:string) => {  
    dispatch(changeFilterCheckbox(checkbox))
  }
  return (
    <div className={s.wrapper}>
      
      <p className={s.title}>Тип фотоаппарата</p>
      <Checkbox arrayOfUnits={CheckboxArr} checkboxChange={checkboxChange}/>

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