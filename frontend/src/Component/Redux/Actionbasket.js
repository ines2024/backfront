export const Addtobasket=(data)=>{
    return{
        type:"ADDTOBASKET",
        payload:data,
    }
}
export const Removefrombasket=(id)=>{
return{
    type:"REMOVE",
    payload:id,
}
}