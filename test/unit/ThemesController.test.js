require("sails-test-helper");

describe("Themes Controller Test", function(){
 describe("GET list", function(){

  it("Should be successful", function(done){
    request.get("/themes")
      .expect(200)
      .end(done);
  });

   describe("POST themes ",function(){

   it("No save theme by BAD REQUEST", function(done){
     request.post("/themes").send({body:"params"})
     .expect(400)
     .end(function(err, resp){
       if (err) return done(err);
       expect(resp.text).to.equals("Bad Request");
       done();
     });
   });

 });

  

 });
});
