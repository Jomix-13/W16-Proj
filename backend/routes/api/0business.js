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
          const businesses = await Business.findAll({
            include: {
              model: Review,
              include: {
                model: User,
              }
            },
            order:[['createdAt', 'DESC']]
          });
            return await res.json(businesses);
        })
);

router.get(
    '/:businessId',
    asyncHandler(
      async (req, res) => {
        const id = req.params.businessId
        const business = await Business.findByPk(id,{
          include:{
            model: Review,
            include: {
              model: User,
            },
          },
        });
      return await res.json(business);
    })
);

router.post(
    '/new',
    asyncHandler(
        async (req, res) => {
          // const id = req.params.businessId
          const {ownerId,title,description,image,address,city,state,zipCode} = req.body
          let newBusiness = await Business.create({ownerId,title,description,image,address,city,state,zipCode})
          newBusiness = newBusiness.toJSON()
          const reNewBusiness = await Business.findByPk(newBusiness.id,{
            include:{
              model: Review,
              include: {
                model: User,
              },
            },
          });
          return res.json(reNewBusiness);
    })
);

router.put(
    '/update/:businessId',
    asyncHandler(
        async (req, res) => {
          const id = await parseInt(req.params.businessId)
          const business = await Business.findByPk(id,{
            include: User,
          })
          await business.update({ 
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode 
          });
          return await res.json({business});
    })
);

router.delete(
    '/:id',
    asyncHandler(
        async (req, res) => {
          const id = req.params.id
          await Business.destroy({
            where: {id}
          })
          return await res.json({message : 'Business deleted'});
    })
);

module.exports = router;
