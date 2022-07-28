import React, { FC } from "react";
import AllFilter from "./CategoryOfFilters/AllFilter/AllFilter";
import CamerasFilter from "./CategoryOfFilters/CamerasFilter/CamerasFilter";
import CarsFilter from "./CategoryOfFilters/CarsFilter/CarsFilter";
import EstateFilter from "./CategoryOfFilters/EstateFilter/EstateFilter";
import LaptopsFilter from "./CategoryOfFilters/LaptopsFilter/LaptopsFilter";

type CategoryType = {CategoryValue: string|undefined}

const FilterSections:FC<CategoryType> = ({CategoryValue}) => {
  switch (CategoryValue){
    case 'Cars': return <CarsFilter/>;
    case 'Estate': return <EstateFilter/>;
    case 'Laptops': return <LaptopsFilter/>;
    case 'Cameras': return <CamerasFilter/>;
    default:return <AllFilter/>
  }
   }
   
export default FilterSections