import React, { useState } from "react";
import s from './CommonFilters.module.scss'
import Select, { OnChangeValue } from 'react-select'
import Slider from 'rc-slider';

import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import { useAppSelector, useAppDispatch } from '../../../Store/hooks';
import {MainSlice} from '../../../Store/Reducers/AppSlice';
import FilterSections from "../FiltersSections";



const CommonFilters = () => {

  const {category} = useAppSelector(state=> state.mainReducer)
  const {changeCategory} = MainSlice.actions
  const dispatch = useAppDispatch()

  let [range, setRange] = useState([0,1000])

  type Option = {value: string, label: string}

  const options = [
    { value: 'All', label: 'Все' },
    { value: 'Cars', label: 'Автомобили' },
    { value: 'Estate', label: 'Недвижимость' },
    { value: 'Laptops', label: 'Ноутбуки' },
    { value: 'Cameras', label: 'Фотоаппараты' }
  ]

  let onHandleChange = (selectedOption : OnChangeValue<Option, false>) => {
    dispatch(changeCategory(selectedOption));
  }

  let onChangeRange = (value:any) => {
    setRange(value)
  }
  
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
      <FilterSections CategoryValue={category?.value }/>
    </div>
  )
}
export default CommonFilters