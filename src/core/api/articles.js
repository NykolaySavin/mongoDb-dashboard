import {postUploadRequest, apiRequest, deleteApiRequest,putUploadRequest} from '../apiRequests';

export function addArticle(id,files,body) {
    return postUploadRequest(`/api/articles`,files,body);
}
export function getArticles() {
    return apiRequest(`/api/articles`);
}
export function deleteArticle(id) {
    return deleteApiRequest(`/api/articles/${id}`);
}
export function editArticle(id,files,body,unchangedFiles) {
    return putUploadRequest(`/api/articles/${id}`,files,body,unchangedFiles);
}