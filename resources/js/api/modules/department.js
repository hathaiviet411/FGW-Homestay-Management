import * as RequestApi from '../request';

export function getListDepartment(url) {
    return RequestApi.getAll(url);
}

export function getDepartment(url) {
    return RequestApi.getOne(url);
}

export function createDepartment(url, data) {
    return RequestApi.postOne(url, data);
}

export function updateDepartment(url, data) {
    return RequestApi.putOne(url, data);
}

export function deleteDepartment(url, department_id) {
    return RequestApi.deleteOne(url, department_id);
}
