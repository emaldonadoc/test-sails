module.exports = {
  list: function (req, res) {
    Themes.query('Select * from themes', function (err, result) {
      if (err)
        throw new Error('something bad happened' + err);
      return res.json({themes: result});
    });
  },

  create: function (req, res) {
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
  },

  showTheme: function (req, res) {
    if (isNaN(req.param('id'))) {
      res.statusCode = 400;
      return res.end("Bad request, send monograph id")
    }

    show(parseInt(req.param('id')),function(err, theme){
      if (err) return res.sender(err, 400);
      if (!theme) return res.send("theme " + id + " not found", 404);
      return res.json(theme);
    });

  },

  edit:function(req,res){
    if (!isValidTheme(req.body)) {
      var body = "Bad Request";
      res.statusCode = 400;
      return res.end(body);
    }
    Themes.update({id:id},data).exec(function(err, updated){
      if(err) return callback(err);
      callback(null, updated);
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

function show(id, callback) {
  Themes.findOne({id: id}).populateAll().exec(function (err, theme) {
    if(err) return callback(err,null);
    callback(null,theme);
  });
}
