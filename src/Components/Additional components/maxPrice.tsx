import { useAppSelector } from "../../Store/hooks"
import { ContentType } from "../../Store/Reducers/AppSlice"

export let maxPrice = (ads:Array<ContentType>) => {
  let maxPrice:number = 0 
  ads.map((i) => {if(i.price > maxPrice) maxPrice = i.price})
  return maxPrice
}