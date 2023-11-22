import axios from "axios"
import { ALLPRODUCT, ONEPRODUCT } from "./Actiontype"


export const GET = () => async (dispatch) => {
    try {
        const res = await axios.get("/product/get")
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

export const UPDATE = (id,data) => async (dispatch) => {
    try {
        const res = await axios.put("http://localhost:5667/product/update/"+id,data)
            .then((res) => dispatch(GET()))
    } catch (error) {
        console.log(error)
    }


}

export const DELETE = (id) => async (dispatch) => {
    try {
        const res = await axios.delete("http://localhost:5667/product/delete/"+id)
            .then((res) => dispatch(GET()))
    } catch (error) {
        console.log(error)
    }
}

export const getbyid = (id) => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:5667/product/get/"+id)
            .then((res) => dispatch({type:ONEPRODUCT,payload:res.data.product}))
    } catch (error) {
        console.log(error)
    }
}