const express=require("express");
const _ourController=require("./controllers/_our-controller");

module.exports=function(app){
	const apiRoutes=express.Router();
	apiRoutes.get('/helloworld',_ourController.helloworld);
	app.use('/api',apiRoutes);
}