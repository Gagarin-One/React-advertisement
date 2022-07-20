import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../Store/hooks";
import { FetchAds } from "../../../../Store/Reducers/actionCreators";
import VButton from "../../../Etc/ViewButton/ResultButton";
import s from './AllFilter.module.scss'

const AllFilter = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(FetchAds('All'))
  },[])

  return (
    <div className={s.wrapper}>
      
    </div>
  )
}
export default AllFilter