//var MonographService = require('../services/MonographsService');

module.exports = {
  list: function (req, res) {
    Monographs.query('Select * from monographs', function(err, result){
     if(err)
       throw new Error('Something bad happened' + err);
       return res.json({monographs:result});
    });
  },

  getOne: function(req, res){
    if(isNaN(req.param('id'))){
      res.statusCode=400;
      return res.end("Bad request, send monograph id")
    }

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
  if( !(isData2UpdateValid(req.body) && !isNaN(req.param('id'))) ){
    var body ="Bad request, send monograph id ";
    res.statusCode =400;
    return res.end(body);
  }

  editMonographById(parseInt(req.param('id')),req.body,function(err,updated){
    if(err) return new Errr("Cannot update register", err);
    if(updated.length <= 0){
      res.statusCode = 400;
      return res.end('Cannot update register, does not exist');
    }
    res.statusCode = 201;
    return res.json(updated);
  });
 }

};


//TODO get out to service file
function isValidMonograph(data){
  return (data.position && data.title && data.theme_id && data.brand_id);
}

function saveValidMonograph(data, callback){
  Monographs.create(data).exec(function(err,created){
    if(err) return callback(err);
    callback(null,created);
  });
}

function isData2UpdateValid(data){
return (data.hasOwnProperty('position') || data.hasOwnProperty('title') || data.hasOwnProperty('theme_id') || data.hasOwnProperty('brand_id'))
}

function editMonographById(id,data, callback){
  Monographs.update({id:id},data).exec(function(err, updated){
    if(err) return callback(err);
    callback(null, updated);
  });
}
