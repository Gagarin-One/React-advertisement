import React, { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../Store/hooks"
import { ContentType, MainSlice } from "../../../Store/Reducers/AppSlice"
import s from './Switch.module.scss'
type Unit = {switchName: string, switchTitle: string}
type SwitchType = {arrayOfUnits:Array<Unit>}

const Switch:FC<SwitchType> = ({arrayOfUnits}) => {
  const dispatch = useAppDispatch()
  const {changeFilterSwitch} = MainSlice.actions
 let [Active, setActive] = useState('any')

  const onSwitchChange = (switchHandle:string) => {
    dispatch(changeFilterSwitch(switchHandle))
    setActive(switchHandle)
  }

  return( 
  <div className={s.switch}>{
    arrayOfUnits.map((item) => {

      if (Active == item.switchName){
        return <button 
        className={s.unitActive} 
        onClick={() => onSwitchChange(item.switchName)}
        >{item.switchTitle}</button>} else 
        
        { 
        return <button
        onClick={() => onSwitchChange(item.switchName)}
        >{item.switchTitle}</button>
        }
    })
  }</div>
  )
}
export default Switch
