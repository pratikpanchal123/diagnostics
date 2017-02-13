(function(){
  'use strict';
  function localContentFactory(serverApi,apiUrl,constantData){
    var categories = [];

    function setCategories() {
      var categoriesURL;
        categoriesURL = constantData.SERVER_ADDRESS + apiUrl.categories.CATEGORIES;
        return serverApi.getData(categoriesURL,true).then(function(response){
            var categoriesList = response.data;
            if(categoriesList.length > 0) {
              angular.forEach(categoriesList,function(c){
                categories[c.categories_id] = c;
              });
            }
        });
    }

    function getCategories() {
      return categories;
    }

    return {
      setCategories:setCategories,
      getCategories:getCategories
    };

  }
  localContentFactory.$inject = ['serverApi','apiUrl','constantData'];

  angular.module('app.pLabs.common',[]).factory('localContent.factory', localContentFactory);

})();