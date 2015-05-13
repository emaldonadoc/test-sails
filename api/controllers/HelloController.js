
module.exports = {
  hi: function (req, res) {
    return res.send("Hola jotin");
  },
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
};
