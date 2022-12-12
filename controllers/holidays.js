const express = require("express");
const router = express.Router();
const app = express();
const PORT = 3000;

router.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});

module.exports = holidays;
