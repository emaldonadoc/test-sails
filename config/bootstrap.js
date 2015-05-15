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
var async = require('async');


module.exports.bootstrap = function(cb) {

  function createBrands(done) {
    var brands = [{name:'SunRice'},{name:'Raf'},{name:'El Sol'}];
    Brands.count().exec(function(error, count){
      if (error) return done(error);

      if(count > 0) { return done(error);
        sails.log("Generating brands...");
        Brands.create(brands).exec(done);
      }
    });
  }

  function createThemes(done){
    var themes = [{name:'ambiente', description:'tema ambiental'},
      {name:'politica', description:'tema politico'}];

    Themes.count().exec(function(error, count){
      if (error) return done(error);
      if (count > 0) return done();
      sails.log("Generating themes...");
      Themes.create(themes).exec(done);
    });
  }

  async.parallel([
    createBrands,
    createThemes
  ], cb);

};
