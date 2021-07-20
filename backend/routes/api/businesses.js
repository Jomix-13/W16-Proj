const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business } = require('../../db/models');
const Review = require('../../db/models/review');

router.get(
    '/',
    asyncHandler(
        async (req, res) => {
          const businesses = await Business.findAll(

          );
          return await res.json(businesses);
    })
);




module.exports = router;