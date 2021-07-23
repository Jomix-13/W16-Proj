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
        let newReview = await Review.create({answer:review,rating,businessId,userId})
        newReview = newReview.toJSON()
        const reNewReview = await Review.findByPk(newReview.id,{
          include: User,
        });
        return res.json(reNewReview);
  })
);
  router.delete(
    '/:id',
    asyncHandler(
        async (req, res) => {
          const id = req.params.id
          await Review.destroy({
            where: {id}
          })
          return await res.json({message : 'Review deleted'});
    })
);
  router.put(
    '/:reviewId',
    asyncHandler(
        async (req, res) => {
          const id = await parseInt(req.params.reviewId)
          const review = await Review.findByPk(id,{
            include: User,
          })
          await review.update({ review: req.body.review, rating: req.body.rating });
          return await res.json({review});
    })
);

module.exports = router;