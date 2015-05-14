//var MonographService = require('../services/MonographsService');

module.exports = {
  list: function (req, res) {
    Monographs.query('Select * from monographs', function(err, result){
     if(err)
       throw new Error('Something bad happened' + err);
       return res.json({monographs:result});
    });
  }
};
