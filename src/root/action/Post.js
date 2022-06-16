export const addContent=(add)=>{
    return {
        type:"CONTENT",
        payload:add
    }
}
export const addComment=(add)=>{
    return {
        type:"COMMENT",
        payload:add
    }
}
export const deleteComment=(add)=>{
    return {
        type:"DELETE_COMMENT",
        payload:add
    }
}

export const addNewLike=(add)=>{
    return {
        type:"LIKE",
        payload:add
    }
}
export const addNewShare=(add)=>{
    return {
        type:"SHARE",
        payload:add
    }
}
export const addNewPost=(add)=>{
    return {
        type:"POST",
        payload:add
    }
}
export const  newDelete =(add)=>{
    return {
        type:"DELETE_POST",
        payload:add
    }
}