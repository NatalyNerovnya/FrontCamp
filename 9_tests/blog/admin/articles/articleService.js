export const ArticleService = $resource => {
    let url = '/articles/:articleId';
    // let params = {styleId: '@styleId', dealerZipe: '@dealerZip'        };
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