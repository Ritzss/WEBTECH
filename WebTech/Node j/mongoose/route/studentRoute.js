// ! Route Handlers / Controllers
const express = require("express");
const { } = require("./../controllers/studentControllers");
const router = express.Router();

router.route("/").get().post();
router.route("/:id").get().patch().delete();

module.exports = router;