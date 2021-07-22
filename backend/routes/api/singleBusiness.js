const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business } = require('../../db/models');
const { Review } = require('../../db/models');
const { User } = require('../../db/models');


router.get(
  '/:businessId',
  asyncHandler(
    async (req, res) => {
      const id = req.params.businessId
      const business = await Business.findByPk(id,{
        include:
          // Review
        {
          model: Review,
          include: {
            model: User,
          }
        }
      });
    return await res.json(business);
  })
);
router.post(
  '/',
  asyncHandler(
      async (req, res) => {
        // const id = req.params.businessId
        const {review,rating,businessId,userId} = req.body
        const newReview = await Review.create({answer:review,rating,businessId,userId})
        return await res.json(newReview);
  })
);
      router.delete(
    '/:reviewId',
    asyncHandler(
        async (req, res) => {
          const reviewId = req.params.reviewId
          const reviw = await Review.findByPk(reviewId);
          return await res.json(reviw);
    })
);


module.exports = router;