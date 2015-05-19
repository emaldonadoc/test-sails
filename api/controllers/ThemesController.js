module.exports = {
  list: function (req, res) {
    Themes.query('Select * from themes', function(err, result){
     if(err)
       throw new Error('something bad happened'+ err);
       return res.json({themes:result});
    });
  },

  create: function(req,res) {
    if (!isValidTheme(req.body)) {
      var body = "Bad Request";
      res.statusCode = 400;
      return res.end(body);
    }
    save(req.body, function (err, created) {
      if (err) return new Error("Can't save Monograph ", err)
      res.statusCode = 210;
      return res.json(created);
    });
  }


};

function isValidTheme(data){
  return (data.name);
}

function save(data, callback) {
  Themes.create(data).exec(function (err, created) {
    if (err) return callback(err);
    callback(null, created);
  });
}

