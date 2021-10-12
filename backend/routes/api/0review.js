const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business } = require('../../db/models');
const { Review } = require('../../db/models');
const { User } = require('../../db/models');


// get all reviews

router.get(
  '/',
  asyncHandler(
      async (req, res) => {
        const reviews = await Review.findAll({
          include: {
            model: User,
        },
          order:[['createdAt', 'DESC']]
        });
          return await res.json(reviews);
      })
);

// get one review
router.get(
  '/:reviewId',
  asyncHandler(
    async (req, res) => {
      const id = req.params.reviewId
      const review = await Review.findByPk(id,{
          include: {
            model: User
        },
      });
    return await res.json(review);
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

router.put(
    '/:reviewId',
    asyncHandler(
        async (req, res) => {
          const id = await parseInt(req.params.reviewId)
          const review = await Review.findByPk(id
            ,{include: User,}
            )
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',req.body.rating)
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',typeof(req.body.rating))
          await review.update( 
            {answer: req.body.review, rating: parseInt(req.body.rating)}
           );
           await review.save()
          return await res.json({review});
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

module.exports = router;


