import { createSlice, PayloadAction } from "@reduxjs/toolkit"
type Option = {value: string, label: string}
type MainState = {
  isLoading: boolean,
  sliderRange:Array<string>,
  category:Option|null
 }

const initialState: MainState = {
  isLoading: false,
  sliderRange:[],
  category:{value: 'all', label: 'Все'}

}

export const MainSlice = createSlice({
  name:'main',
  initialState,
  reducers:{
    changeCategory(state,action:PayloadAction<Option|null>){
      state.category=action.payload
    }
  }
})

export default MainSlice.reducer