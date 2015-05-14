//var MonographService = require('../services/MonographsService');

module.exports = {
  list: function (req, res) {
    Brands.query('Select name from brands', function(err, result){
     if(err)
       throw new Error('something bad happened');

       return res.json({brands:result});
    });
    //return res.send("Monograph controller , " + data);
  }
};
