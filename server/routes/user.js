const express = require("express");
const upload = require("../middleware/upload");
const { detectDiseases, verifyUser } = require("../controllers/user");

const router = express.Router();

router.post("/verify", verifyUser);
router.post("/detect-diseases", upload.array("files"), detectDiseases);

module.exports = router;
