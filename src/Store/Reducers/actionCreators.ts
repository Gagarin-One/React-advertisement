import axios from 'axios';
import { maxPrice } from '../../Components/Etc/maxPrice';
import { AppDispatch } from '../store';
import { MainSlice } from './AppSlice';
export const FetchAds = (category: string|undefined) => async (dispatch: AppDispatch) => {
  try{
    // "Mock api" allows you to create only 4 endpoints, so an additional request had to be made for the fifth endpoint
    dispatch(MainSlice.actions.adsFetching())
    let response

    category === 'All' ? 
    response = await axios.get<Array<any>>('https://624fd576f0ae10a8ea4fba2f.mockapi.io/All') : 
    response = await axios.get<Array<any>>(`https://62d7bad69c8b5185c77aa032.mockapi.io/${category}`)

    dispatch(MainSlice.actions.adsFetchingSuccess(response.data))
    dispatch(MainSlice.actions.changeContentArr(response.data))
    dispatch(MainSlice.actions.setMaxPrice(maxPrice(response.data)))
    dispatch(MainSlice.actions.setRange([0,maxPrice(response.data)]))
  } catch (e:any) {
    dispatch(MainSlice.actions.adsFetchingError(e.massage))
  }
}
