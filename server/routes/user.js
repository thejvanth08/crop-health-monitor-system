const express = require("express");
const upload = require("../middleware/upload");
const {
  detectDiseases,
  verifyUser,
  addDetails,
} = require("../controllers/user");

const router = express.Router();

router.post("/verify", verifyUser);
router.post("/detect-diseases", upload.array("files"), detectDiseases);
router.post("/add-details", addDetails);

module.exports = router;
