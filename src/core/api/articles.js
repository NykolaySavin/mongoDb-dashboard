import {postUploadRequest, apiRequest, deleteApiRequest} from '../apiRequests';

export function addArticle(files,body) {
    console.dir(body)
    console.dir(files)
    return postUploadRequest(`/api/articles`,files,body);
}
export function getArticles() {
    return apiRequest(`/api/articles`);
}
export function deleteArticle(id) {
    return deleteApiRequest(`/api/articles/${id}`);
}