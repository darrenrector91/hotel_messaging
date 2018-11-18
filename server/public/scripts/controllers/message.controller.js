myApp.controller('MessageController', ['MessageService', function (MessageService) {
    var self = this;

    self.singleGuest = [];
    self.singleHotel = [];
    self.visit = [];

    self.hotels = MessageService.hotels;
    self.guests = MessageService.guests;

    MessageService.getHotels();
    MessageService.getGuests();

    self.getSelectedGuestData = function (guest, hotel) {
        let guestResponse = guest;
        let hotelResponse = hotel;

        self.singleGuest = guestResponse;
        self.singleHotel = hotelResponse;

        firstName = guestResponse.firstName;
        start = guestResponse.reservation;
        tod = start.startTimestamp;

        let convert = tod * 1000;
        let time = new Date(convert).toLocaleTimeString('en-US', { hour12: false });
        var hours = Number(time.match(/^(\d+)/)[1]);

        let visitTime = '';

        if (hours < 12) {
            visitTime = 'Morning'

        } else if (hours >= 12 && hours <= 17) {
            visitTime = 'Afternoon'
        } else {
            visitTime = 'Evening'
        }
        self.visit = visitTime;

    }

}]);