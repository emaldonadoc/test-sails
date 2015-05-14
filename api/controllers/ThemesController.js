var ThemeController = {

  list: function (req, res) {
   Theme.findAll(function(err, themes){
     if (err)
      return res.send(err, 500);
    return res.json({Themes:themes});
	});
  }
};
module.exports = ThemeController;
