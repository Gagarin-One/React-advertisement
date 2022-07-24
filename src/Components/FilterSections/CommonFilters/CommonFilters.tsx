import React, { FC, useEffect, useState } from "react";
import s from './CommonFilters.module.scss'
import Select, { OnChangeValue } from 'react-select'
import Slider from 'rc-slider';

import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import { useAppSelector, useAppDispatch } from '../../../Store/hooks';
import {MainSlice} from '../../../Store/Reducers/AppSlice';
import FilterSections from "../FiltersSections";
import { FetchAds } from "../../../Store/Reducers/actionCreators";
import VButton from "../../Etc/ViewButton/ResultButton";



const CommonFilters = () => {
  const {ads} = useAppSelector(state=> state.mainReducer)
  const {category} = useAppSelector(state=> state.mainReducer)
  const {changeCategory} = MainSlice.actions
  const {setRange} = MainSlice.actions
  const dispatch = useAppDispatch()
  const {sliderRange} = useAppSelector(state => state.mainReducer)
  const {maxPrice} = useAppSelector(state => state.mainReducer)
  
  useEffect(() => {
    dispatch(FetchAds(category?.value))                                
  },[category])

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
    dispatch(setRange(value))
  }
console.log(sliderRange)
  

  return (
    <div className={s.wrapper}>
      <p className={s.filter}>Фильтр</p>
      <p className={s.category}>Категория товаров</p>
      <Select 
      className={s.select}
      onChange={onHandleChange}
      options={options} 
      defaultValue={options[0]}
      />
      <p className={s.price}>Цена, ₽ </p>
      <div className={s.sumPrice} >
        <div>от {sliderRange[0]}</div>
        <div>до {sliderRange[1]}</div>
      </div>
      <div className={s.slider}>
        <Slider
        range
        min={0}
        max={maxPrice}
        value={[sliderRange[0], sliderRange[1]]}
        onChange={onChangeRange}
        />
      </div>
      <FilterSections CategoryValue={category?.value }/>
    </div>
  )
}
export default CommonFilters