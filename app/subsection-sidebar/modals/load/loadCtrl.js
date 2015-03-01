(function () {
    'use strict';

    var title = 'Load Config';

    angular.module('mappifyApp.sidebar.load', [
        'mappifyApp.sidebar.configService'
    ])

        .config(function (configServiceProvider) {
            var description = {
                order: 0,
                title: title,
                fileName: 'load',
                icon: 'cloud-upload',
                ctrl: LoadCtrl
            };

            configServiceProvider.registerConfig(description);
        });

    /*@ngInject*/
    function LoadCtrl($modalInstance, scaffoldingConfigModel) {

        var modal = this;

        modal.title = title;

        modal.json = '';

        modal.cancel = function () {
            $modalInstance.dismiss();
        };

        // modalInstance resolves the promise
        modal.close = function () {
            scaffoldingConfigModel.loadConfigModelFromJSON(modal.json);
            $modalInstance.close(modal.json);
        };

    }

})();