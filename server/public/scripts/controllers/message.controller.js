myApp.controller('MessageController', ['MessageService', function (MessageService) {
    // console.log('MessageController created');
    var self = this;

    self.guest = {};

    self.hotels = MessageService.hotels;
    self.guests = MessageService.guests;
    console.log('guests ', self.guests);
    console.log('hotels ', self.hotels);



    MessageService.getHotels();
    MessageService.getGuests();

    self.getSelectedGuestData = function (guest) {
        MessageService.getSelectedGuestData(guest).success(function () {
            alert('sent to service');
        }).error(function () {
            alert('did not send to service')
        });
    }

}]);