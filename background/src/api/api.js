import request from "@/utils/service.js"



// 请求首页数据
export let getData=()=>{
    return request({
        url:"/home/getData",
        method:"GET",
    })
}
// // 返回用户列表
// export let getUser=()=>{
//     return request({
//         url:"/user/getUser",
//         method:"GET",
//         params:{
//             // params
//         }
//     })
// }
// export let addUser=()=>{
//     return request({
//         url:"/user/add",
//         method:"POST",
//         data:{
//             // data
//         }
//     })
// }
// export let editUser=()=>{
//     return request({
//         url:"/user/edit",
//         method:"POST",
//         data:{
//             // data
//         }
//     })
// }
// export let delUser=()=>{
//     return request({
//         url:"/user/del",
//         method:"POST",
//         data:{
//             // data
//         }
//     })
// }
// export let getMenu=()=>{
//     return request({
//         url:"/permission/getMenu",
//         method:"POST",
//         data:{
//             // data
//         }
//     })
// }