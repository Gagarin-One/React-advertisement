import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Option = {value: string, label: string}

type MainState = {
  isLoading: boolean,
  sliderRange:Array<string>,
  category:Option|null
  ads:Array<any>
  error:string
 }

const initialState: MainState = {
  isLoading: false,
  sliderRange:[],
  error:'',
  category:{value: 'All', label: 'Все'},
  ads:[]
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
    }

  }
})

export default MainSlice.reducer