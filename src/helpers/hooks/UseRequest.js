import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constants/urls';

const UseRequest = ({ url, body, contentType }) => {

    const createRequest = (method, url, body, contentType, isAuthRequired) => {
        return axios({
            method: method,
            url: API_BASE_URL + url,
            data: body,
            headers: setHeader(isAuthRequired, contentType)
        });
    };

    const setHeader = (isAuthRequired, contentType) => {
        if (isAuthRequired) {
            axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
        } else {
            delete axios.defaults.headers.common['Authorization']
        }
        axios.defaults.headers.common["Content-Type"] = contentType
    };

    const get = (isAuthRequired) => {
        return createRequest("GET", url, null, isAuthRequired, contentType);
    };
    const post = (isAuthRequired) => {
        return createRequest("POST", url, body, isAuthRequired, contentType);
    };

    const put = (isAuthRequired) => {
        return createRequest("PUT", url, body, isAuthRequired, contentType);
    };

    const remove = (isAuthRequired) => {
        return createRequest("DELETE", url, null, isAuthRequired, contentType);
    };


    return {
        get,
        post,
        put,
        remove
    };
};

export default UseRequest;