const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const carModels = require('./models/car_models')

const app = express()
const port = 4003;


// mongoose connection to database
mongoose.connect('mongodb://127.0.0.1:27017/carDatabase')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res) =>{
    res.send("hello from mongoose integration api")
});

//create end point
app.post('/addCarDetails',(req,res)=>{
    carModels.create(req.body).then((dbresponse)=>
    { 
        res.send("car  details added succesfully")
    }).catch((err)=>
    {res.send(err.message)
    })

})

//read end point

app.get('/getCarDetails',(req,res)=>{
    carModels.find().then((results)=>
    {
        res.send(results)
    }).catch((err)=>
    {res.send(err.message)
    })
})

//update end point
app.put('/updateCarDetails',(req,res)=>{
    carModels.findOneAndUpdate({_id:req.body._id},{$set:{price:req.body.price}}).then((dbresponse)=>
    {
        res.send("car price details updated succesfully")
    }).catch((err)=>
    {res.send(err.message)
    })
})


app.delete('/deleteCarDetails',(req,res)=>{
    carModels.findOneAndDelete({_id:req.body._id}).then((dbresponse)=>
    {
        res.send("car price details deleted succesfully")
    }).catch((err)=>
    {res.send(err.message)
    })
})

app.listen(port, ()=>{
    console.log("server started successfully on ",port);
})

// food odering platform
// how many roles we can have  
// 1. user  role 
        // user role end points 
        //  1.1  /getFoodDetails
        //  1.2  /getProfileDetails
        //  1.3  /getRestaurantDetails
        //  1.4  /placeOrder
        //  1.5  /searchRestaurants
        //  1.6  /trackorder
        //  1.7  /addAddress
        //  1.8  /addPayment
        //  1.9  /cancelOrder
        //  2.0  /auth
// 2. admin role