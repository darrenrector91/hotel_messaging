const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const hotel = require('./routes/hotel.router');
// const Nexmo = require('nexmo')
// const nexmo = new Nexmo({
//     apiKey: '405659b5',
//     apiSecret: 'bBL11FIGOBIwMHFc'
// })

// const from = '15073964162'
// const to = '13203090976'
// const text = 'Hello from Nexmo'

// nexmo.message.sendSms(from, to, text)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.use('/hotel', hotel);

// app.post('/send', (req, res) => {
//     // Send SMS
//     nexmo.message.sendSms(
//         config.number, req.body.toNumber, req.body.message, { type: 'unicode' },
//         (err, responseData) => { if (responseData) { console.log(responseData) } }
//     );
// });

// Start listening for requests on a specific port
app.listen(port, function () {
    console.log('listening on port', port);
});
