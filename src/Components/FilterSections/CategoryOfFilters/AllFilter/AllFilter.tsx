import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import { FetchAds } from "../../../../Store/Reducers/actionCreators";
import { MainSlice } from "../../../../Store/Reducers/AppSlice";
import { maxPrice } from "../../../Etc/maxPrice";
import VButton from "../../../Etc/ViewButton/ResultButton";
import s from './AllFilter.module.scss'

const AllFilter = () => {
  const {setMaxPrice} = MainSlice.actions
  const {setRange} = MainSlice.actions
  const {ads} = useAppSelector(state => state.mainReducer)
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