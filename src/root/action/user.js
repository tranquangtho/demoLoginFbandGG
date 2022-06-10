export const addNewInfo=(user)=>{
    return {
        type:"User_Name",
        payload:user
    }
}
export const addNewUSer=(user)=>{
    return {
        type:"User_Login",
        payload:user
    }
}