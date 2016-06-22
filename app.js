(function() {
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: ' .. .. ',
            canPurchase: false,
        },
        {
            name: '2',
            price: 3.95,
            description: ' .. .. ',
            canPurchase: false,
        },
        {
            name: '3',
            price: 5.95,
            description: ' .. .. ',
            canPurchase: false,
        },
    ];
})();

