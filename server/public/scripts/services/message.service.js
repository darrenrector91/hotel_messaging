myApp.service('MessageService', ['$http', '$location', function ($http, $location) {
    // console.log('MessageService Loaded');
    var self = this;

    self.hotels = {
        list: []
    };

    self.guests = {
        list: []
    };

    // GET
    self.getHotels = function () {
        $http.get('json/hotels.json')
            .then(function (response) {
                data = response;
                self.hotels.list = response.data;
            });
    }// End GET

    // GET
    self.getGuests = function () {
        $http.get('json/guests.json')
            .then(function (response) {
                data = response;
                self.guests.list = response.data;
            });
    }// End GET 

}]);