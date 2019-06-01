import { postUploadRequest, apiRequest } from '../apiRequests';

export function addArticle(files,body) {
    console.dir(body)
    console.dir(files)
    return postUploadRequest(`/api/articles`,files,body);
}
export function getArticles() {
    return apiRequest(`/api/articles`);
}