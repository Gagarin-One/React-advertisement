import React from "react";
import Content from "../ContentComponents/Content";
import CommonFilters from "../FilterSections/CommonFilters/CommonFilters";
import s from './MainPage.module.scss'
const MainPage = ( ) => {
  const arr = [{id:1,title:'bmw 3 series', price:'1999999', location:'moscow',date:'1 november',img:'https://5koleso.ru/wp-content/uploads/2020/07/07-bmw_m2.jpeg'},{id:1,title:'bmw 3 series', price:'1999999', location:'moscow',date:'2 november',img:'https://5koleso.ru/wp-content/uploads/2020/07/07-bmw_m2.jpeg'}]
    return (
      <div style={{display: 'flex'}}>
        <CommonFilters/>
        <Content array={arr}/>
      </div>
    )
}
export default MainPage;