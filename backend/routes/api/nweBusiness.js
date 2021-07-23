const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business,Review,User } = require('../../db/models');




router.post(
  '/new',
  asyncHandler(
      async (req, res) => {
        // const id = req.params.businessId
        const {ownerId,title,description,address,city,state,zipCode} = req.body
        let newBusiness = await Business.create({ownerId,title,description,address,city,state,zipCode})
        newBusiness = newBusiness.toJSON()
        const reNewBusiness = await Business.findByPk(newBusiness.id,{
          include:
          {
            include: {
              model: User,
            }
          }
        });
        return res.json(reNewBusiness);
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

router.put(
  '/:businessId',
  asyncHandler(
      async (req, res) => {
        const id = await parseInt(req.params.businessId)
        const business = await Business.findByPk(id,{
          include: User,
        })
        await business.update({ 
          title: req.body.title,
          description: req.body.description,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zipCode: req.body.zipCode 
        });
        return await res.json({business});
  })
);

module.exports = router;