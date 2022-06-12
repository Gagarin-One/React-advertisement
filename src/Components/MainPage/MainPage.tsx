import React from "react";
import s from './MainPage.module.scss'
import Select from 'react-select'
const Main = () => {
  const options = [
    { value: 'all', label: 'Все' },
    { value: 'cars', label: 'Автомобили' },
    { value: 'estate', label: 'Недвижимость' },
    { value: 'laptops', label: 'Ноутбуки' },
    { value: 'cameras', label: 'Фотоаппараты' }
  ]

  return (
    <div className={s.wrapper}>
      <p className={s.filter}>Фильтр</p>
      <p className={s.category}>Категория товаров</p>
      <Select className={s.select} options={options} defaultValue={options[0]}/>
      <p className={s.price}>Цена, ₽ </p>
    </div>
  )
}
export default Main