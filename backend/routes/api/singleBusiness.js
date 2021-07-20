const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business } = require('../../db/models');
const { Review } = require('../../db/models');

router.get(
    '/:businessId',
    asyncHandler(
        async (req, res) => {
          const id = req.params.businessId
          const business = await Business.findByPk(id,{
              include: [{
                  model: Review,
                  attributes:['rating', 'answer'],
                  through:{attributes:[]}
              }]
          });
          return await res.json(business);
    })
);


module.exports = router;