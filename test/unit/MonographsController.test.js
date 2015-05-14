require("sails-test-helper");

describe("Monograph Controller Test", function(){

 describe("GET list", function(){
  it("Should be successful", function(done){
    request.get("/monographs/list")
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body).to.have.property('monographs').a('array');
      done();
    });
  });
 });

 describe("PUT monograph",function(){
   it("Save monograph in DB", function(done){
     request.put({
       url:"/monographs/save",
       headers:{
         'Content-Type': 'application/json'
       }
     })
     .expect(200)
     .end(function(err, resp, body){
       if (err) return done(err);
       console.log(resp.statusCode, body);
       done();
     });
   });

 });


});
