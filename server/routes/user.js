const express = require("express");
const upload = require("../middleware/upload");
const { detectDiseases } = require("../controllers/user");

const router = express.Router();

router.post("/detect-diseases", upload.array("files"), detectDiseases);

module.exports = router;
