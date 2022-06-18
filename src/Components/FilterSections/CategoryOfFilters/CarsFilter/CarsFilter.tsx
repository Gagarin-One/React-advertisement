import React from "react";
import VButton from "../../../Etc/ViewButton/vButton";
import s from "./CarsFilter.module.scss"
import Select, { OnChangeValue } from 'react-select'
const CarsFilter = ( ) => {
  type Option = {value: string, label: string}
  let onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    
  }
  const options = [
    { value: '1990', label: '1990' },
    { value: '2000', label: '2000' },
    { value: '2005', label: '2005' },
    { value: '2010', label: '2010' },
    { value: '2020', label: '2020' }
  ]
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
        <p>Любая</p>
        <p>Механика</p>
        <p>Автомат</p>
      </div>
      <p className={s.title}>Тип кузова</p>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Седан</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Универсал</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Хэтчбэк</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Внедорожник</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Купе</p>
      </div>
      <VButton/>
    </div>
  )
}
export default CarsFilter