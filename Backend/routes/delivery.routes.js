const express=require("express");
const router=express.Router();
const assignDeliveries=require("../controllers/delivery.controller");
router.post("/assign",(req,res)=>{
    const {orders,agents}=req.body;
    const result=assignDeliveries(orders,agents);
    res.json({
        success:true,
        data:result
    })
})
module.exports=router;