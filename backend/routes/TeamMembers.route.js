let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Team Member Model
let TeamSchema = require("../models/Team.models");

// CREATE Team Member
router.post("/create-teamMember", (req, res, next) => {
  TeamSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
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
