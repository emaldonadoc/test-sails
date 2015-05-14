require("sails-test-helper");

describe("Themes Controller Test", function(){
 describe("GET list", function(){

  it("Should be successful", function(done){
    request.get("/themes")
      .expect(200)
      .end(done);
  });

  

 });
});
