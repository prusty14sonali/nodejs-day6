const express = require('express');
const carRouter = express.Router();

const carModels = require('../models/car_models');

//create end point
carRouter.post('/addCarDetails',(req,res)=>{
    carModels.create(req.body).then((dbresponse)=>
    { 
        res.send("car  details added succesfully")
    }).catch((err)=>
    {res.send(err.message)
    })

})

//read end point

carRouter.get('/getCarDetails',(req,res)=>{
    carModels.find().then((results)=>
    {
        res.send(results)
    }).catch((err)=>
    {res.send(err.message)
    })
})

//update end point
carRouter.put('/updateCarDetails',(req,res)=>{
    carModels.findOneAndUpdate({_id:req.body._id},{$set:{price:req.body.price}}).then((dbresponse)=>
    {
        res.send("car price details updated succesfully")
    }).catch((err)=>
    {res.send(err.message)
    })
})


carRouter.delete('/deleteCarDetails',(req,res)=>{
    carModels.findOneAndDelete({_id:req.body._id}).then((dbresponse)=>
    {
        res.send("car price details deleted succesfully")
    }).catch((err)=>
    {res.send(err.message)
    })
})

module.exports = carRouter;
