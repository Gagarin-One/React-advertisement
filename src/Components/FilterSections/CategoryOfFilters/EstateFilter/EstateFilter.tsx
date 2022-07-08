import React from "react";
import s from './EstateFilter.module.scss'
import Select, { OnChangeValue } from 'react-select'
import VButton from "../../../Etc/ViewButton/ResultButton";

const EstateFilter = () => {
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
      <p className={s.title}>Тип недвижимости</p>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Дом</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
        <p>Квартира</p>
      </div>
      <div className={s.checkbox}>
        <input type='checkbox' className={s.myinput}/>
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
        <p>Любое</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5+</p>
      </div>
    </div>
  )
}
export default EstateFilter