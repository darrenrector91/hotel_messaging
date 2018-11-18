var express = require('express');
var router = express.Router();

// Data route to APi
router.get('/api', function (req, res) {

  var apiURL = 'http://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics';

  request(apiURL, function (error, response, body) {
    if (error) {
      console.log('error getting guest json ', error);
      res.sendStatus(500);
    }
    else {
      res.send(body);
    }
  })
});// End route to API


module.exports = router;