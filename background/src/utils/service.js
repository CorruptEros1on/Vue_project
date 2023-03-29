import axios from "axios"
// 创建 axios 请求实例
const serviceAxios = axios.create({
    baseURL:"https://www.fastmock.site/mock/76c956f783549f8400bde914bd5ec214/api", // 基础请求地址
    timeout: 10000, // 请求超时设置

});
// 添加请求拦截器
serviceAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
serviceAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    switch (error.response.status) {
        case 302: alert('接口重定向了！'); break;
        case 400: alert('参数不正确！'); break;
        case 401: alert('您未登录，或者登录已经超时，请先登录！'); break;
        case 403: alert('您没有权限操作！'); break;
        case 404: alert('请求地址出错'); break; // 在正确域名下
        case 408: alert('请求超时！'); break;
        case 409: alert('系统已存在相同数据！'); break;
        case 500: alert('服务器内部错误！'); break;
        case 501: alert('服务未实现！'); break;
        case 502: alert('网关错误！'); break;
        case 503: alert('服务不可用！'); break;
        case 504: alert('服务暂时无法访问，请稍后再试！'); break;
        case 505: alert('HTTP版本不受支持！'); break;
        default: alert('异常问题，请联系管理员！'); break
    }
    return Promise.reject(error);
});



export default serviceAxios