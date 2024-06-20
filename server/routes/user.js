const express = require("express");
const router = express.Router();



router.post("/detect-diseases", detectDiseases);

router.post("/", login);

module.exports = router;
