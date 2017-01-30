export const ArticleService = $resource => {
    let url = '/articles';
    // let params = {styleId: '@styleId', dealerZipe: '@dealerZip'        };
    return $resource(url,{},{
        create: {
            method: "POST",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
}