/**
 * LoadExcelController
 *
 * @description :: Server-side logic for managing loadexcels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	load: function(req, res){
		if(!req.body.path || res.body.path == "" ){
			res.statusCode=400;
			return res.end("Please send a valid excel path");

		}
		res.end();
	}

};
