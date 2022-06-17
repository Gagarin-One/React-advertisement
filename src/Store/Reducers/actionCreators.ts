import axios from 'axios';
import { AppDispatch } from '../store';
import { MainSlice } from './AppSlice';
export const FetchAds = () => async (dispatch: AppDispatch) => {
  try{
    dispatch(MainSlice.actions.adsFetching())
    const response = await axios.get<Array<any>>('https://624fd576f0ae10a8ea4fba2f.mockapi.io/Ads')
    dispatch(MainSlice.actions.adsFetchingSuccess(response.data))
    
  } catch (e:any) {
    dispatch(MainSlice.actions.adsFetchingError(e.massage))
  }
}