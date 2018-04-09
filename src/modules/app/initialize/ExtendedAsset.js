(function () {
    'use strict';

    const factory = function () {

        if (!Waves) {
            return null;
        }

        class ExtendedAsset extends Waves.Asset {

            constructor(props) {
                super({
                    ...props,
                    name: WavesApp.remappedAssetNames[props.id] || props.name
                    // ID, name, precision and description are added here
                });

                this.reissuable = props.reissuable;
                this.timestamp = props.timestamp;
                this.sender = props.sender;
                this.height = props.height;

                const divider = new BigNumber(10).pow(this.precision);
                this.quantity = new BigNumber(props.quantity).div(divider);

                this.ticker = props.ticker || '';
                this.sign = props.sign || '';
                this.displayName = props.ticker || props.name;
            }

        }

        return ExtendedAsset;
    };

    factory.$inject = [];

    angular.module('app').factory('ExtendedAsset', factory);
})();
