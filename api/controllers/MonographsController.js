module.exports = {
  list: function (req, res) {
    Monographs.find({}, function(err, result){
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

    MonographsService.getMonographById(parseInt(req.param('id')),
     function(err, monograph){
       if(err) throw new Error('Something bad happend', err);
       if(monograph == null || monograph.length > 0){
         res.statusCode=404;
         return res.end("Monograph not found");
       }
        res.statusCode=200;
        return res.json(monograph);
     });
  },

  save: function(req, res){
  if(!isValidMonograph(req.body)){
    var body = "Bad Request";
    res.statusCode= 400;
    return res.end(body);
   }
   MonographsService.saveValidMonograph(req.body, function(err, created){
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

  MonographsService.editMonographById(parseInt(req.param('id')),req.body,
    function(err,updated){
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


// Validations
function isValidMonograph(data){
  return (data.position && data.title && data.theme_id && data.brand_id);
}

function isData2UpdateValid(data){
  return (data.hasOwnProperty('position') ||
        data.hasOwnProperty('title') ||
        data.hasOwnProperty('theme_id') ||
        data.hasOwnProperty('brand_id') ||
        data.hasOwnProperty('num')
        )
}
