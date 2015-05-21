
var MonographsService ={

  saveValidMonograph: function (data, callback){
    Monographs.create(data).exec(function(err,created){
      if(err) return callback(err);
      callback(null,created);
    });
  },

  editMonographById: function (id,data, callback){
    Monographs.update({id:id},data).exec(function(err, updated){
      if(err) return callback(err);
      callback(null, updated);
    });
  },

  getMonographById: function (id, callback){
    Monographs.findOne({id:id}).populateAll().exec(function(err, monograph){
      if(err) return callback(err,null);
      callback(null,monograph);
    });
  }


}

module.exports = MonographsService;
