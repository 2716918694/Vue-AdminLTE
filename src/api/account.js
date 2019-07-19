/**
 *  account 模块接口
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const account = {

    // post提交，获取注册验证码
    sendOtp(phone) {
        return axios.post(`${base.local}/user/getotp`, qs.stringify(phone));
    },

    // post提交，登录
    login(params) {
        return axios.post(`${base.local}/user/login`, qs.stringify(params));
    },

    // post提交，验证手机注册码
    verifyOtp (params) {
        return axios.post(`${base.local}/user/verifyotp`,qs.stringify(params));
    },

    // post提交，用户注册信息
    registerByPhone (params) {
        return axios.post(`${base.local}/user/registerbyphone`,qs.stringify(params));
    }
}

export default account;