require("sails-test-helper");

describe("Themes Controller Test", function(){

 describe("GET Themes list", function(){
  it("Should be successful", function(done){
    request.get("/themes")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('themes').a('array');
        done();
      })
  });
 });

});
