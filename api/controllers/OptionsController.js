module.exports = {

	list: function (req, res) {
		if(isNaN(req.param('id'))){
		  res.statusCode=400;
		  return res.end("Bad request, send monograph id")
		}
	   console.log("value"	+ parseInt(req.param('id')));
	   if(req.param('id') >= 10){
		   return res.json([{"value":"perro"},{"value":"gato"}]);
	   }
	   else{
		   return res.json([{"value":"barco"},{"value":"avion"}]);
	   }
	}

};