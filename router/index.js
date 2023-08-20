const express = require('express');
const router = express.Router();

// Health check and common endpoints go here...
router.get("/site_status", (req, res) => {
  res.send({
    status: "ok",
    success: true
  });
});

// Versioning...
require("./v1")(router); // <- Adding v1 routes here

module.exports = router;