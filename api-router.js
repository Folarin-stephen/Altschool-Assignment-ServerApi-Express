const express = require("express");
const middleware = require("./api-middleware");
const controller = require("./api-controller");




const router = express.Router();


router.get("/",  controller.GetInventories);

router.get('/:id',middleware.checkId, controller.getSpecificInventory)

router.post("/", middleware.checkInventory, controller.createInventory);

router.delete('/:id', middleware.checkId, controller.delInventory)

router.put('/:id', middleware.checkId, controller.updateInventory)


module.exports = router