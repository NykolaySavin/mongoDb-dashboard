import {
  postUploadRequest,
  apiRequest,
  deleteApiRequest,
  putUploadRequest
} from "../apiRequests";

export function addArticle(body) {
  const files = body.content.map(page => page.image);
  const data = new FormData();
  if (files) files.forEach((file, i) => data.append(`files[${i}]`, file));
  if (body && body.content)
    body.content.forEach((item, i) =>
      Object.keys(item).forEach(value => {
        if (value != "image") data.append(`body[${i}][${value}]`, item[value]);
      })
    );
  data.append("title", body.title);
  return postUploadRequest(`/api/articles`, data);
}
export function getArticles() {
  return apiRequest(`/api/articles`);
}
export function deleteArticle(id) {
  return deleteApiRequest(`/api/articles/${id}`);
}
export function editArticle(body) {
    const data = new FormData();
    const files = body.content.filter(page=>!page.image[0]).map(page => page.image);
    if(files)
        files.forEach((file,i)=>data.append(`files[${i}]`,file));
    if(body&&body.content)
        body.content.forEach((item,i)=>Object.keys(item).forEach(value=>{
            if (value != "image")
            data.append(`body[${i}][${value}]`,item[value])
            else if(!item[value][0])
                data.append(`body[${i}][${value}]`,'new')
            else{
                data.append(`body[${i}][${value}]`,item['image'].key)
            }
        }))
    data.append('title',body.title)
  return putUploadRequest(`/api/articles/${body["_id"]}`,data);
}
