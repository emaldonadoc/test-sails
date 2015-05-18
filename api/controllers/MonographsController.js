//var MonographService = require('../services/MonographsService');

module.exports = {
  list: function (req, res) {
    Monographs.query('Select * from monographs', function(err, result){
     if(err)
       throw new Error('Something bad happened' + err);
       return res.json({monographs:result});
    });
  },

  save: function(req, res){
  if(!isValidMonograph(req.body)){
    var body = "Bad Request";
    res.statusCode= 400;
    return res.end(body);
   }
   saveValidMonograph(req.body, function(err, created){
     if(err) return new Error("Can't save Monograph ",err)
     res.statusCode = 201;
     return res.json(created);
   });
 },

 edit: function(req,res){

 }

};

function isValidMonograph(data){
  return (data.position && data.title && data.theme_id && data.brand_id);
}

function saveValidMonograph(data, callback){
  Monographs.create(data).exec(function(err,created){
    if(err) return callback(err);
    callback(null,created);
  });
}
