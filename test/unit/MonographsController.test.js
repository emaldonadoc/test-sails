require("sails-test-helper");

describe.only("Monograph Controller Test", function(){

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
   var service = "/monographs/save";
   it("No save monograph by BAD REQUEST", function(done){
     request.post(service).send({body:"params"})
     .expect(400)
     .end(function(err, resp){
       expect(err).to.not.exist;
       expect(resp.text).to.equals("Bad Request");
       done();
     });
   });

   it("Save monograph",function(done){
     var monograph2save={
       position: 22,
       title:"Test monograph",
       theme_id: 1,
       brand_id:2,
       num:22
     };

     request.post(service).send(monograph2save)
     .expect(200).end(function(err, resp){
       expect(err).to.not.exist;
       done();
     });

     Monographs.find({title:"Test monograph"})
       .exec(function(result){
         console.log("FIND REQUEST   ", result);
         done();
       });
   });

 });


});
