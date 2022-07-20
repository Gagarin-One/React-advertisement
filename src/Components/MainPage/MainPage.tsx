import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import Content from "../ContentComponents/Content";
import CommonFilters from "../FilterSections/CommonFilters/CommonFilters";
import ResultButton from "../Etc/ViewButton/ResultButton"
import s from './MainPage.module.scss'
import { MainSlice } from "../../Store/Reducers/AppSlice";
const MainPage = ( ) => {
  const {category} = useAppSelector(state=> state.mainReducer)
  const {ads} = useAppSelector(state => state.mainReducer) // content items 
  const {sliderRange} = useAppSelector(state=> state.mainReducer)
  const {filterData} = useAppSelector(state=> state.mainReducer)
  const dispatch = useAppDispatch()

  let [filteredArr, setFilteredArr] = useState<any>([])  
  useEffect(() => {
    setFilteredArr([])
  },[category])

            // main filter
  const createFilteredArr = () => {
    let localArray = []
    
    if(filterData.select[0]){
      for (let i = 0 ; i < ads.length; i++){
        if (ads[i].tags.select >= filterData.select[0]){
          localArray.push(ads[i])
        }
      }
    }

    if (filterData.switch[0]){
      if (filterData.switch[0] !== 'any'){
        for (let i = 0 ; i < ads.length; i++){
          localArray = localArray.filter(item => item.tags.switch === filterData.switch[0])
        }
      }
    }
    
    if (filterData.checkbox.length !== 0){
      for (let i = 0 ; i < ads.length; i++){
        localArray = localArray.filter(item => filterData.checkbox.some(checkItem => checkItem === item.tags.checkbox))
      }
    }

    localArray = localArray.filter(item => item.price >= sliderRange[0] && item.price <= sliderRange[1])

    if (filterData.switch.length > 1){
      if (filterData.switch[1] !== 'any'){
        for (let i = 0 ; i < ads.length; i++){
          localArray = localArray.filter(item => item.tags.secondSwitch === filterData.switch[1])
        }
      }
    }
    if (filterData.dopeCheckbox.length !== 0){
      for (let i = 0 ; i < ads.length; i++){
        localArray = localArray.filter(item => filterData.dopeCheckbox.some(checkItem => checkItem === item.tags.dopeCheckbox))
      }
    }

    if(filterData.select.length > 1){
      localArray = localArray.filter(item => item.tags.secondSelect >= filterData.select[1])
    }

    setFilteredArr(localArray)
    console.log(localArray)
    
  }

    return (
      <div>
        <div style={{display: 'flex'}}>
          <CommonFilters />
          <Content array={filteredArr.length === 0 ? ads : filteredArr}/>
        </div>
        <ResultButton createArr={()=>createFilteredArr}/>
      </div>
      
    )
}
export default MainPage;