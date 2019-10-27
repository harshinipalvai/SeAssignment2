const express=require('express');
const router=express.Router();
const axios=require('axios');
const api='https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+';
const keyString='&key=AIzaSyDAaoRVwlFq21cByZOeQkjlp_ZkpaxM7Vw' 

router.get('/data',(req,res)=>{
    API=api+req.query.place+keyString;
    axios.get(API).then(posts => {
        res.status(200).json(posts.data);
    })
    .catch(error=>{
        res.status(500).send(error)
    });
});

module.exports=router;