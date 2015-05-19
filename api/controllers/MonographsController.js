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
  if( isNaN(req.param('id')) ){
    var body ="Bad request, send monograph id ";
    res.statusCode =400;
    return res.end(body);
  }

  editMonographById(parseInt(req.param('id')),req.body,function(err,updated){
    if(err) return new Errr("Cannot update register", err);
    var status=201;
    var body= updated;

    if(updated.length <= 0){
      status=400;
      body='Cannot update register, does not exist'
    }

    res.statusCode = status;
    return res.json(body);
  });
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

function editMonographById(id,data, callback){
  Monographs.update({id:id},data).exec(function(err, updated){
    if(err) return callback(err);
    callback(null, updated);
  });
}
