myApp.controller('MessageController', ['MessageService', function (MessageService) {
    // console.log('MessageController created');
    var self = this;

    self.hotels = MessageService.hotels;
    self.guests = MessageService.guests;
    console.log('guests ', self.guests);
    console.log('hotels ', self.hotels);



    MessageService.getHotels();
    MessageService.getGuests();


}]);