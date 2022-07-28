import React, { useEffect } from "react";
import s from './EstateFilter.module.scss'
import Select, { OnChangeValue } from 'react-select'
import { useAppDispatch } from "../../../../Store/hooks";
import { MainSlice, OptionNum } from "../../../../Store/Reducers/AppSlice";
import Switch from "../../../Additional components/Switch/Switch";
import Checkbox from "../../../Additional components/Checkbox/Checkbox";

const EstateFilter = () => {
  const dispatch = useAppDispatch()
  const {changeFilterSwitch} = MainSlice.actions
  const {changeFilterSelect} = MainSlice.actions
  const {changeFilterCheckbox} = MainSlice.actions

  useEffect(() => {
    dispatch(changeFilterSelect(20))
  },[])

  const onHandleChange = (selectedOption : OnChangeValue<OptionNum, false>) => {
    dispatch(changeFilterSelect(selectedOption!.value)) 
  }
  const SwitchArr = [
    {switchName:'any',switchTitle:"Любая"},
    {switchName:'1',switchTitle:"1"},
    {switchName:'2',switchTitle:"2"},
    {switchName:'3',switchTitle:"3"},
    {switchName:'4',switchTitle:"4"},
    {switchName:'5+',switchTitle:"5+"}
  ]
    
  const CheckboxArr = [
    {checkboxName: 'house', checkboxTitle:'Дом'},
    {checkboxName: 'flat', checkboxTitle:'Квартира'},
    {checkboxName: 'apartment', checkboxTitle:'Апартаменты'}
  ]

  const options = [
    { value: 20, label: '20' },
    { value: 40, label: '40' },
    { value: 60, label: '60' },
    { value: 100, label: '100' },
    { value: 120, label: '120' }
  ]

  const checkboxChange = (checkbox:string) => {
    dispatch(changeFilterCheckbox(checkbox))
  }
  const switchChange = (switchHandle:string) => {
    dispatch(changeFilterSwitch(switchHandle))
  }

  return (
    <div className={s.wrapper}>
      
      <p className={s.title}>Тип недвижимости</p>
      <Checkbox arrayOfUnits={CheckboxArr} checkboxChange={checkboxChange}/>
      
      <p className={s.title}>Минимальная площадь,м²</p>
      <Select 
        className={s.select}
        onChange={onHandleChange}
        options={options}
        defaultValue={options[0]}
      />
      <p className={s.title}>Колличество комнат</p>
      <Switch arrayOfUnits={SwitchArr} onSwitchChange={switchChange}/>
    </div>
  )
}
export default EstateFilter