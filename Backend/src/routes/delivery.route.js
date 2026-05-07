const express = require("express");

const router = express.Router();

const {
  assignDeliveries,
} = require("../controllers/delivery.controller");

router.post("/assign", assignDeliveries);

module.exports = router;