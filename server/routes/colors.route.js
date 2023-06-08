const { Router } = require("express");
const ColorsController = require("../controllers/colors.controller");
const router = Router();

router.get("/", ColorsController.GetColor);

module.exports = router;
