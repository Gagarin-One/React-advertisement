import React, { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../Store/hooks"
import { ContentType, MainSlice } from "../../../Store/Reducers/AppSlice"
import s from './Switch.module.scss'
type Unit = {switchName: string, switchTitle: string}
type SwitchType = {arrayOfUnits:Array<Unit>,onSwitchChange:(arg:string) => void}

const Switch:FC<SwitchType> = ({arrayOfUnits,onSwitchChange}) => {

 let [Active, setActive] = useState('any')

  const onHandleChange = (switchHandle:string) => {
    onSwitchChange(switchHandle)
    setActive(switchHandle)
  }

  return( 
  <div className={s.switch}>{
    arrayOfUnits.length > 4 ? 
    arrayOfUnits.map((item) => {

      if (Active == item.switchName){
        return <button 
        className={s.longUnitActive} 
        onClick={() => onHandleChange(item.switchName)}
        >{item.switchTitle}</button>} else 
        { 
        return <button
        className={s.longSwitch}
        onClick={() => onHandleChange(item.switchName)}
        >{item.switchTitle}</button>
        }
    }) :
    arrayOfUnits.map((item) => {

      if (Active == item.switchName){
        return <button 
        className={s.unitActive} 
        onClick={() => onHandleChange(item.switchName)}
        >{item.switchTitle}</button>} else 
        { 
        return <button
        onClick={() => onHandleChange(item.switchName)}
        >{item.switchTitle}</button>
        }
    })
  }</div>
  )
}
export default Switch
