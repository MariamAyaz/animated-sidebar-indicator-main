const router = require('express').Router();
let ContactUsDB = require('../models/contactUs.models');

router.route('/').get((req, res) => {
    ContactUsDB.findOne()
        .then(ContactUs => res.json(ContactUs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((request, response) => {
    ContactUsDB.findOne()
        .then(ContactUs => {
            ContactUs.description = request.body.description;
            ContactUs.location = request.body.location;
            ContactUs.locationLink = request.body.locationLink;
            ContactUs.phoneNumber1 = request.body.phoneNumber1;
            ContactUs.phoneNumber2 = request.body.phoneNumber2;
            ContactUs.phoneNumber3 = request.body.phoneNumber3;
            ContactUs.timings1 = request.body.timings1;
            ContactUs.timings2 = request.body.timings2;
            ContactUs.timings3 = request.body.timings3;
            ContactUs.facebook = request.body.facebook;
            ContactUs.instagram = request.body.instagram;
            ContactUs.twitter = request.body.twitter;
            ContactUs.skype = request.body.skype;
            ContactUs.email = request.body.email;

            ContactUs.save()
                .then(() => response.json('Success'))
                .catch(err => response.status(400).json(err));
        })
        .catch(err => response.status(400).json(err));
});

module.exports = router;