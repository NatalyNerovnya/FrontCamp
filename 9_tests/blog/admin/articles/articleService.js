export const ArticleService = $resource => {
    let url = '/articles/:articleId';
    return $resource(url, { articleId: '@id' }, {
        create: {
            method: "POST",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        },
        update: {
            method: "PUT",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
}