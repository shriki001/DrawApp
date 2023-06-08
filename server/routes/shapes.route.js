const { Router } = require("express");
const ShapesController = require("../controllers/shapes.controller");

const router = Router();

router.get("/", ShapesController.GetShape)

module.exports = router;
