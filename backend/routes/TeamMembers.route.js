let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

const Team = require("../models/Team.models");
// Team Member Model
let TeamSchema = require("../models/Team.models");

const cloudinary=require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const path=require("path");
const { resourceLimits } = require("worker_threads");

//Cloudinary config
cloudinary.config({ 
  cloud_name: 'doud75rhx', 
  api_key: '282528745991912', 
  api_secret: 'KlOJ03_Co8_4hdaoihYF2-wX11E',
  secure: true
});



// CREATE Team Member
router.post("/create-teamMember", (req, res, next) => {
  
   
 
  
  TeamSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// READ Team Member
router.get("/", (req, res, next) => {
  TeamSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE Team Member
router
  .route("/edit-teamMember/:id")
  // Get Single Team Member
  .get((req, res, next) => {
    TeamSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update Team Member Data
  .put((req, res, next) => {
    TeamSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          console.log("Team Member updated successfully !");
        }
      }
    );
  });

// Delete Team Member
router.delete("/delete-teamMember/:id", (req, res, next) => {
  TeamSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
