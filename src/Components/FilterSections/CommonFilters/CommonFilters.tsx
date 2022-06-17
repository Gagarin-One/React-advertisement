import React, { useState } from "react";
import s from './CommonFilters.module.scss'
import Select, { OnChangeValue } from 'react-select'
import Slider from 'rc-slider';

import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import AllFilter from "../AllFilter";
import { useAppSelector, useAppDispatch } from '../../../Store/hooks';
import {MainSlice} from '../../../Store/Reducers/AppSlice';



const Main = () => {

  const {category} = useAppSelector(state=> state.mainReducer)
  const {changeCategory} = MainSlice.actions
  const dispatch = useAppDispatch()

  let [range, setRange] = useState([0,1000])

  type Option = {value: string, label: string}

  const options = [
    { value: 'all', label: 'Все' },
    { value: 'cars', label: 'Автомобили' },
    { value: 'estate', label: 'Недвижимость' },
    { value: 'laptops', label: 'Ноутбуки' },
    { value: 'cameras', label: 'Фотоаппараты' }
  ]

  let onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeCategory(selectedOption));
  }

  let onChangeRange = (value:any) => {
    setRange(value)
  }
  
 console.log(category)
  return (
    <div className={s.wrapper}>
      <p className={s.filter}>Фильтр</p>
      <p className={s.category}>Категория товаров</p>
      <Select className={s.select} onChange={onHandleChange} options={options} defaultValue={options[0]}/>
      <p className={s.price}>Цена, ₽ </p>
      <div className={s.sumPrice} >
        <div>от {range[0]}</div>
        <div>до {range[1]}</div>
      </div>
      <div className={s.slider}>
        <Slider
        range
        min={0}
        max={1000}
        defaultValue={[0, 1000]}
        onChange={onChangeRange}
        />
      </div>
    </div>
  )
}
export default Main