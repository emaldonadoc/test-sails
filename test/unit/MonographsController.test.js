require("sails-test-helper");

describe("Monograph Controller Test", function(){
 describe("GET list", function(){

  it("Should be successful", function(done){
    request.get("/listMonographs")
      .expect(200)
      .end(done);
  });

  

 });
});
