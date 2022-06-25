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
import VButton from "../../Etc/ViewButton/vButton";

type CommonFiltersType = {createArr:any}

const CommonFilters:FC<CommonFiltersType> = ({createArr}) => {
  const {priceRange} = useAppSelector(state=> state.mainReducer)
  const {category} = useAppSelector(state=> state.mainReducer)
  const {changeCategory} = MainSlice.actions
  const {setRange} = MainSlice.actions

  const dispatch = useAppDispatch()


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
    dispatch(setRange(value));
  }
  
  return (
    <div className={s.wrapper}>
      <p className={s.filter}>Фильтр</p>
      <p className={s.category}>Категория товаров</p>
      <Select className={s.select} onChange={onHandleChange} options={options} defaultValue={options[0]}/>
      <p className={s.price}>Цена, ₽ </p>
      <div className={s.sumPrice} >
        <div>от {priceRange[0]}</div>
        <div>до {priceRange[1]}</div>
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
      <div style={{marginLeft:'109px'}}>
        <VButton createArr={createArr}/>
      </div>
    </div>
  )
}
export default CommonFilters