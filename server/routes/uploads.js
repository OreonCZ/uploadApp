const express = require('express');
const router = express.Router();

const uploadsController = require("../controllers/uploads")

/* Get user uploads. */
router.get('/', uploadsController.getUploads);

/* Get user upload. */
router.get('/:id', uploadsController.getUpload);

/* Create user upload. */
router.post('/', uploadsController.postUpload);

module.exports = router;
