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
            { include: [{ model: Review }] }
            );
            console.log("********", businesses);
            return await res.json(businesses);
        })
);





module.exports = router;