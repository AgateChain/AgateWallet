(function () {
    'use strict';

    var DEFAULT_ERROR_MESSAGE = 'Connection is lost';

    function WavesWalletDepositController($scope, events, coinomatService, dialogService, notificationService,
                                          applicationContext, bitcoinUriService, utilsService, $element) {

        var ctrl = this;

        ctrl.btc = {
            bitcoinAddress: '',
            bitcoinAmount: '',
            bitcoinUri: '',
            minimumAmount: 0.01
        };

        ctrl.eth = {
            ethereumAddress: '',
            minimumAmount: 0.01
        };

        ctrl.ltc = {
            litecoinAddress: '',
            minimumAmount: 0.01
        };

        ctrl.zec = {
            zcashAddress: '',
            minimumAmount: 0.01
        };

        ctrl.bch = {
            cashAddress: '',
            minimumAmount: 0.01
        };

        ctrl.fiat = {
            verificationLink: 'https://go.idnow.de/coinomat/userdata/' + applicationContext.account.address,
            email: 'support@coinomat.com'
        };

    }

    WavesWalletDepositController.$inject = [
        '$scope', 'wallet.events', 'coinomatService', 'dialogService', 'notificationService',
        'applicationContext', 'bitcoinUriService', 'utilsService', '$element'
    ];

    angular
        .module('app.wallet')
        .controller('walletDepositController', WavesWalletDepositController);
})();
