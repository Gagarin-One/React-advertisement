import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { FetchAds } from "../../Store/Reducers/actionCreators";
import Content from "../ContentComponents/Content";
import CommonFilters from "../FilterSections/CommonFilters/CommonFilters";
import ItemSlider from "../ItemSlider/ItemSlider";
import s from './MainPage.module.scss'
const MainPage = ( ) => {
  const dispatch = useAppDispatch()
  const {ads} = useAppSelector(state => state.mainReducer) 
  const {category} = useAppSelector(state=> state.mainReducer)
  const {priceRange} = useAppSelector(state=> state.mainReducer)

  let [optionalFilter, setOptFilter] = useState([])
  let [priorityFilter, setPriFilter] = useState([])
  let [filteredArr, setFilteredArr] = useState<any>([])  //initial!
    
  useEffect(() => {
    dispatch(FetchAds(category?.value))
  },[category])
  useEffect(() => {
    dispatch(FetchAds('Ads'))
  },[])

  const filterArr = (filter:any) => {                     // add type
    if (optionalFilter.some(f => f === filter)) {
      for (let i = 0; i < optionalFilter.length; i++) {  // need refactoring
        if(optionalFilter[i] === filter) {
          setOptFilter(optionalFilter.splice(i,1))
        }
      } 
    } else { setOptFilter(filter) }
  }

  const createFilteredArr = () => {
    
    // let filt = ads
    // // filt.filter(item => item.price < priceRange[0] && item.price > priceRange[1])
    // for (let i = 0 ; i < filt.length; i++){
    //   if (filt[i].price > priceRange[0] && filt[i].price < priceRange[1]) {
    //     filt.push(filt[i])
    //   } 
    // }
    // console.log(filteredArr)
  }

    return (
      <div>
        <div style={{display: 'flex'}}>
          <CommonFilters createArr={createFilteredArr}/>
          <Content array={ads}/>
          <button onClick={()=>createFilteredArr()}>gddggd</button>
        </div>
      </div>
      
    )
}
export default MainPage;