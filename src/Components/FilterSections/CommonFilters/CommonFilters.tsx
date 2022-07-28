import React, { FC } from "react";
import s from './CommonFilters.module.scss'
import Select, { OnChangeValue } from 'react-select'
import Slider from 'rc-slider';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import { useAppSelector, useAppDispatch } from '../../../Store/hooks';
import {MainSlice, OptionStr} from '../../../Store/Reducers/AppSlice';
import FilterSections from "../FiltersSections";
import ResultButton from "../../Additional components/ViewButton/ResultButton";


type CommonFiltersType = {createFilteredArr:()=>void}
const CommonFilters:FC<CommonFiltersType> = ({createFilteredArr}) => {
  const {category} = useAppSelector(state=> state.mainReducer)
  const {changeCategory} = MainSlice.actions
  const {setRange} = MainSlice.actions
  const dispatch = useAppDispatch()
  const {sliderRange} = useAppSelector(state => state.mainReducer)
  const {maxPrice} = useAppSelector(state => state.mainReducer)

  const options = [
    { value: 'All', label: 'Все' },
    { value: 'Cars', label: 'Автомобили' },
    { value: 'Estate', label: 'Недвижимость' },
    { value: 'Laptops', label: 'Ноутбуки' },
    { value: 'Cameras', label: 'Фотоаппараты' }
  ]

  const onHandleChange = (selectedOption : OnChangeValue<OptionStr, false>) => {
    dispatch(changeCategory(selectedOption));
  }

  const onChangeRange = (value:any) => {
    dispatch(setRange(value))
  }

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
      <ResultButton createArr={()=>createFilteredArr}/>
    </div>
  )
}
export default CommonFilters