import { FC, MouseEventHandler } from 'react';
import s from './ResultButton.module.scss';
type ButtonType = {createArr: any}

const ResultButton:FC<ButtonType> = ({createArr}) => {
  return (
    <div className={s.wrapper}>
      <button onClick={createArr()}>Показать</button>
    </div>
  )
}
export default ResultButton