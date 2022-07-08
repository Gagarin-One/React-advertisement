import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Option = {value: string, label: string}

export type ContentType = {
  id:number,
  title:string,
  price:number,
  location:string,
  date:string,
  img:string
}

type FilterDataType = {
  select:string | undefined,
  switch:string | undefined,
  checkbox:Array<string> | undefined, // описать через интерфейс n колво объектов
}

type MainState = {
  isLoading: boolean,
  sliderRange:Array<number>,
  category:Option|null
  ads:Array<ContentType>
  error:string
  ContentArr:Array<ContentType>
  priceRange:Array<number>
  filterData:FilterDataType
 }


const initialState: MainState = {
  isLoading: false,
  sliderRange:[0,1000],
  error:'',
  category:{value: 'All', label: 'Все'},
  ads:[],
  ContentArr:[],
  priceRange:[0,1000],
  filterData:{
    select:'',
    switch:'any',
    checkbox:[]
  }
}

export const MainSlice = createSlice({
  name:'main',
  initialState,
  reducers:{
    adsFetching(state){
      state.isLoading = true;
    },

    adsFetchingSuccess(state, action:PayloadAction<Array<any>>){
      state.isLoading = false;
      state.error = ''
      state.ads = action.payload
    },
    adsFetchingError(state, action:PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload
    },

    changeCategory(state,action:PayloadAction<Option|null>){
      state.category=action.payload
    },
    setRange(state,action:PayloadAction<Array<number>>){
      state.sliderRange = action.payload
    },
    changeFilterSelect(state,action:PayloadAction<string | undefined>){
        state.filterData.select = action.payload
      },
    changeFilterSwitch(state,action:PayloadAction<string>){
      state.filterData.switch = action.payload
    },
    changeFilterCheckbox(state,action:PayloadAction<string>){
      state.filterData.checkbox?.push(action.payload)
    },
    removeFilterCheckbox(state,action:PayloadAction<string | undefined>){
      state.filterData.checkbox = state.filterData.checkbox?.filter((item) => item !== action.payload )
    }
  }
})

export default MainSlice.reducer