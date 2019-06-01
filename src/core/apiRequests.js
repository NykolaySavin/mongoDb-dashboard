import fetch from 'isomorphic-fetch';

export const HEADERS = {
    JSON: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};
export const IS_API = '@@API';

export function apiRequest(url, options) {
    return fetch(url, Object.assign({}, options, { credentials: 'include' }))
        .then((response) => {
            if (response.ok) {
                return response.json().then(data => ({ response: data }));
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json()
                    .then(json => ({ [IS_API]: true, error: json, status: response.status }));
            }
            return response.text()
                .then(text => ({ [IS_API]: true, error: text, status: response.status }));
        });
}
export function putApiRequest(url, body, options = { headers: {} }) {
    return apiRequest(url, {
        ...options,
        method: 'PUT',
        headers: {
            ...options.headers,
            ...HEADERS.JSON,
        },
        body: JSON.stringify(body),
    });
}
export function postApiRequest(url, body, options = { headers: {} }) {
    return apiRequest(url, {
        ...options,
        method: 'POST',
        headers: {
            ...options.headers,
            ...HEADERS.JSON,
        },
        body: JSON.stringify(body),
    });
}

export function postUploadRequest(url, files,body) {
    const data = new FormData();
    files.forEach((file,i)=>data.append(`files[${i}]`,file));
    body.content.forEach((item,i)=>Object.keys(item).forEach(value=>data.append(`body[${i}][${value}]`,item[value])))
    data.append('title',body.title)
    return apiRequest(url, {
        method: 'POST',
        body: data,
    });
}

export function deleteApiRequest(url, body, options = { headers: {} }) {
    return apiRequest(url, {
        ...options,
        method: 'DELETE',
        headers: {
            ...options.headers,
            ...HEADERS.JSON,
        },
        body: JSON.stringify(body),
    });
}
