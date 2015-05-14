require("sails-test-helper");

describe("Monograph Controller Test", function(){

 describe("GET list", function(){
  it("Should be successful", function(done){
    request.get("/monographs")
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body).to.have.property('monographs').a('array');
      done();
    });
  });
 });

 describe("POST monograph",function(){

   it("No save monograph by BAD REQUEST", function(done){
     request.post("/monographs/save").send({body:"params"})
     .expect(400)
     .end(function(err, resp){
       if (err) return done(err);
       expect(resp.text).to.equals("Bad Request");
       done();
     });
   });

 });


});
