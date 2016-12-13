'use strict';

// common factory
angular.module('customersApp').factory('commonUtilsFactory', ['$location','$rootScope','$uibModal',function ($location,$rootScope,$uibModal) {

	// file upload extension check
    function validateFileBeforeUpload (file){
        // file type checking 
        var validFormats = ['jpg','jpeg','png'];
        var filename = file.name;
        var ext = filename.substr(filename.lastIndexOf('.')+1);
        var matchExt = false;
        for (var index = 0; index < validFormats.length; index++) {
           if(ext == validFormats[index]){
                matchExt = true; 
           }
    	}
    	 return matchExt;   
	}

    // file upload size check
	function validateExtensionBeforeUpload(file){
          var maxSize = 5000000 // 5 MB    
                var size = file.size;
                var checkFileSize = false;
                if(maxSize > size){
                  checkFileSize = true;   
                }
                return checkFileSize;
 	}

    // return active class 
	function getCSSClassByPath (path){
       if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
	}

	function broadcastMessage (event,message){
        $rootScope.$broadcast(event, {  message: message });
    }

    function listenOnBroadcast(event,callback){
        $rootScope.$on(event,callback);

    }

    // reusable delete modal as service 
    function deleteModal(headerText,bodyText,yesCallback,noCallback){
         var modalInstance = $uibModal.open({
                    templateUrl:'scripts/common/delete.template.html',
                    size: 'lg',
                    controller:function($scope, $uibModalInstance , customersService){
                            $scope.headerText = headerText;
                            $scope.bodyText = bodyText;
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                                noCallback();
                            };
                            $scope.delete = function(){
                                $uibModalInstance.close();
                                yesCallback()   
                            }
                    }
                });
                modalInstance.result.then(function(){
                }, function(){
                });
    }

	return {
		validateFile : validateFileBeforeUpload,
		getClass : getCSSClassByPath,
		validateExtension : validateExtensionBeforeUpload,
		broadcast: broadcastMessage,
        deleteConfirmation:deleteModal,
        listen:listenOnBroadcast,
	}


}]);

