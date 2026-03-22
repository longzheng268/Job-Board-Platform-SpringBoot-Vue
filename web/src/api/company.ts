// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
import { UserState } from '/@/store/modules/user/types';
// import axios from 'axios';
enum URL {
    listUserCompany = '/api/company/listUserCompany',
    listAdminCompany = '/api/company/listAdminCompany',
    create = '/api/company/create',
    update = '/api/company/update',
    delete = '/api/company/delete',
}

const listUserCompanyApi = async (params: any) => get<any>({ url: URL.listUserCompany, params: params, data: {}, headers: {} });
const listAdminCompanyApi = async (params: any) => get<any>({ url: URL.listAdminCompany, params: params, data: {}, headers: {} });
const createApi = async (data: any) =>
    post<any>({ url: URL.create, params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const updateApi = async (data: any) =>
    post<any>({ url: URL.update,params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const deleteApi = async (data: any) =>
    post<any>({ url: URL.delete,params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });


export { listUserCompanyApi, listAdminCompanyApi, createApi, updateApi, deleteApi };
