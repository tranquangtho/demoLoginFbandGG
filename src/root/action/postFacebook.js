// POST
export const PostNew=(add)=>{
    return {
        type:"POST_FACEBOOK",
        payload:add
    }
}
// Comment
export const CommentNew=(add)=>{
    return {
        type:"COMMENT_FACEBOOK",
        payload:add
    }
}
// delete Comment
export const deleteComment=(add)=>{
    return {
        type:"DELETE_COMMENT",
        payload:add
    }
}
// Like facebook
export const LikePost=(add)=>{
    return {
        type:"LIKE_FACEBOOK",
        payload:add
    }
}
// delete post
export const  deletePost =(add)=>{
    return {
        type:"DELETE_POST_FACEBOOK",
        payload:add
    }
}
