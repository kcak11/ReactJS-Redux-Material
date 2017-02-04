//============================
// Define the functions that will be called
// when someone accesses the route on our
// api
//============================

exports.helloworld = function(req, res, next) {
  res.status(200).json({
    message: "Hello Welcome to Axios world"
  })
}
