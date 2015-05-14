//var MonographService = require('../services/MonographsService');

module.exports = {
  list: function (req, res) {
    Monographs.query('Select * from monographs', function(err, result){
     if(err)
       throw new Error('something bad happened');
       return res.json({monographs:result});
    });
    //return res.send("Monograph controller , " + data);
  }
};
