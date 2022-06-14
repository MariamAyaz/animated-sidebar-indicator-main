let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let ForSalePropertiesSchema = require("../models/SalePropertyDetailSchema.models");


router.post("/create-forSaleProperty", (req, res, next) => {
    ForSalePropertiesSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});


router.get("/", (req, res, next) => {
    ForSalePropertiesSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});


router
    .route("/edit-forSaleProperty/:id")
    .get((req, res, next) => {
        ForSalePropertiesSchema.findById(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
    })
    .put((req, res, next) => {
        ForSalePropertiesSchema.findByIdAndUpdate(
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


router.delete("/delete-forSaleProperty/:id", (req, res, next) => {
    ForSalePropertiesSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
