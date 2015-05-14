module.exports = {
  list: function (req, res) {
    Themes.query('Select theme from themes', function(err, result){
     if(err)
       throw new Error('something bad happened');

       return res.json({themes:result});
    });
  }
};

