let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let ForRentPropertiesSchema = require("../models/RentPropertyDetailSchema.models");


router.post("/create-forRentProperty", (req, res, next) => {
    ForRentPropertiesSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});


router.get("/", (req, res, next) => {
    ForRentPropertiesSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});


router
    .route("/edit-forRentProperty/:id")
    .get((req, res, next) => {
        ForRentPropertiesSchema.findById(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
    })
    .put((req, res, next) => {
        ForRentPropertiesSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data);
                    console.log("Property updated successfully !");
                }
            }
        );
    });


router.delete("/delete-forRentProperty/:id", (req, res, next) => {
    ForRentPropertiesSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: "Property removed successfully",
            });
        }
    });
});

module.exports = router;
