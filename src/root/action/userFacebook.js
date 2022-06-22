export const loginFacebook=(add)=>{
    return {
        type:"LOGIN_USER_FACEBOOK",
        payload:add
    }
}
export const logOutFacebook=(add)=>{
    return {
        type:"LOG_OUT_FACEBOOK",
        payload:add
    }
}