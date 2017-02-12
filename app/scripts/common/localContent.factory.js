(function(){
  'use strict';
  function localContentFactory(serverApi,apiUrl){
    var categories;

    function setCategories() {
      var categoriesURL;
        categoriesURL = config.SERVER_ADDRESS + apiUrl.categories.CATEGORIES;
      return serverApi.getData(categoriesURL,true).then(function(response){
          categories = response.data;
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
  localContentFactory.$inject = ['serverApi','apiUrl'];

  angular.module('app.pLabs.common',[]).factory('localContent.factory', localContentFactory);

})();