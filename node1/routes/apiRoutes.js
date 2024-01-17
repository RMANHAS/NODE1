import express from 'express';

import  {postapiController,deleteapiController,getSingleapiController,updateapiController, getApiController,showDataController}  from '../controller/apiController.js';


 const router=express.Router();

//get api router  from file index.js whose path is app.use("/api/v1", apiRoutes)
// nd then we get the controller from apicontroller file


// router.post("/controller",postapiController);
router.post("/alluserss",postapiController);

router.get("/showdata",showDataController)

router.get("/singleuser/:_id",getSingleapiController);
router.delete("/deleteuser/:_id",deleteapiController);
router.put("/updateuser/:_id",updateapiController);

export default router;