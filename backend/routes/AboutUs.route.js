const router = require('express').Router();
let AboutUsDB = require('../models/AboutUs.models');

router.route('/').get((req, res) => {
    AboutUsDB.findOne()
        .then(AboutUs => res.json(AboutUs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((request, response) => {
    AboutUsDB.findOne()
        .then(AboutUs => {
            AboutUs.description= request.body.description;
            AboutUs.title1= request.body.title1;
            AboutUs.title2= request.body.title2

            AboutUs.list1= request.body.list1;
            AboutUs.list2= request.body.list2;
            AboutUs.list3= request.body.list3;
            AboutUs.list4= request.body.list4;
            AboutUs.list5= request.body.list5;
            AboutUs.list6= request.body.list6;
            AboutUs.list7= request.body.list7;

            AboutUs.SellProperty= request.body.SellProperty;
            AboutUs.DailyApartment= request.body.DailyApartment;
            AboutUs.FamilyHouse= request.body.FamilyHouse;

            AboutUs.testimonial= request.body.testimonial;
            AboutUs.ClientSay= request.body.ClientSay;
            AboutUs.line1= request.body.line1;
            AboutUs.say1= request.body.say1;
            AboutUs.say2= request.body.say2;

            AboutUs.ClientName1= request.body.ClientName1;
            AboutUs.ClientName2= request.body.ClientName2
            AboutUs.ClientPosition1= request.body.ClientPosition1;
            AboutUs.ClientPosition2= request.body.ClientPosition2;

            AboutUs.save()
                .then(() => response.json('Success'))
                .catch(err => response.status(400).json(err));
        })
        .catch(err => response.status(400).json(err));
});


module.exports = router;