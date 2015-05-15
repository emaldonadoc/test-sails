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
   console.log("SAVING MONOGRAPH");
   var isCreated =saveValidMonograph(req.body);
   console.log("Is created monograps  ", isCreated);
   return res.json({});
  }

};


function isValidMonograph(data){
  return (data.position && data.title && data.theme_id && data.brand_id);
}

function saveValidMonograph(data){
  return Monographs.create(data).exec(function(err,created){
    if(err) return new Error("Can't save Monographs :"+err);
    console.log("Monograph created", created);
    return created;
  });
}
