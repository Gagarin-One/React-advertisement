import React, { FC } from "react"
import s from './Checkbox.module.scss'

type Unit = {checkboxName: string,checkboxTitle: string}
type CheckboxType = {arrayOfUnits:Array<Unit>,checkboxChange:(arg:string) => void}

const Checkbox:FC<CheckboxType> = ({arrayOfUnits,checkboxChange}) => {
  
  return (
    <div>
      { arrayOfUnits.map((item) => {return <div className={s.checkbox}>
        <input 
        type='checkbox' 
        onChange={() =>checkboxChange(item.checkboxName)} 
        className={s.myinput}
        />
        <p>{item.checkboxTitle}</p>
      </div>
      })
      }
    </div>
  )
}
export default Checkbox