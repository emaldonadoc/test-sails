/**
 * LoadExcelController
 *
 * @description :: Server-side logic for managing loadexcels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	load: function(req, res){
		if(isPathValid(req.body)){
			res.statusCode=400;
			return res.end("Please send a valid excel path");
		}

    LoadExcelService.readExcel(req.body.path,function(err, loaded){
		 if(err) throw new Error('Something bad when load', err);
     return res.json(loaded);
		});
	}

};


function isPathValid(body){
	return !body.path || body.path == "";
}
