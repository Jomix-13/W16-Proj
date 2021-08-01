const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business,Review,User } = require('../../db/models');




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