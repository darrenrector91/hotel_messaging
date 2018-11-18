myApp.service('MessageService', ['$http', '$location', function ($http, $location) {
    // console.log('MessageService Loaded');
    var self = this;

    self.hotels = {
        list: []
    };

    self.guests = {
        list: []
    };

    let convert = 1486785126 * 1000;
    let time = new Date(convert).toLocaleString();
    console.log(time);

    // GET
    self.getHotels = function () {
        $http.get('json/hotels.json')
            .then(function (response) {
                data = response;
                self.hotels.list = response.data;
                console.log(self.hotels.list);
            });
    }// End GET

    // GET
    self.getGuests = function () {
        $http.get('json/guests.json')
            .then(function (response) {
                data = response;
                self.guests.list = response.data;
                // console.log(self.guests.list);
            });
    }// End GET 

    self.getSelectedGuestData = function (guest) {
        console.log(guest);

    }











}]);