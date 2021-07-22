const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business } = require('../../db/models');
const {Review} = require('../../db/models');
const {User} = require('../../db/models');

router.get(
    '/',
    asyncHandler(
        async (req, res) => {
          const businesses = await Business.findAll(
            {include: Review
              // {all :true}
            });
            return await res.json(businesses);
        })
);





module.exports = router;