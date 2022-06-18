import React from "react";
import VButton from "../../../Etc/ViewButton/vButton";
import s from "./CamerasFilter.module.scss"
import Select, { OnChangeValue } from 'react-select'

const CamerasFilter = ( ) => {

  type Option = {value: string, label: string}
  let onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    
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
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Тип фотоаппарата</p>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Зеркальный</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Цифровой</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
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
        onChange={onHandleChange}
        options={resolutionOptions}
        defaultValue={resolutionOptions[0]}
      />
      <VButton/>
    </div>
  )
}
export default CamerasFilter