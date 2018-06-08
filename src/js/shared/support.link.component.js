(function () {
    'use strict';

    var url = 'api.agatechain.services';

    function SupportLinkController() {}

    angular
        .module('app.shared')
        .component('wavesSupportLink', {
            controller: SupportLinkController,
            template: '<a href="http://' + url + '" target="_blank">' + url + '</a>'
        });
})();
