import axios from "axios"
import { ALLPRODUCT } from "./Actiontype"

export const GET = () => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:5667/product/get")
            .then((res) => dispatch({ type: ALLPRODUCT, payload: res.data.AllProducts }))
    } catch (error) {
        console.log(error)
    }

}
export const Addproduct=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post("http://localhost:5667/product/post",data)
        .then((res)=>dispatch(GET()))
    } catch (error) {
      console.log(error)  
    }
}