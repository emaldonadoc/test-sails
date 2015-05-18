/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  var brands = [{name:'SunRice'},{name:'Raf'},{name:'El Sol'}];

  Brands.count().exec(function(error, count){
    if(count <= 0) {
      sails.log("Generating brands...");
      Brands.create(brands).exec(cb);
    }
  });


  var themes = [{theme:'hitler y los anticonceptivos modernos'},{theme:'vida extaterrestre en bandas punk'},{theme:'El papa y su influencia en el porno actual'}];

  Themes.count().exec(function(error, count){
    if(count <= 0) {
      sails.log("Generating themes...");
      Themes.create(themes).exec(cb);
    }else{
      return cb();
    }
  });



  //cb();
};
