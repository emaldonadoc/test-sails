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
   after(function(done){
     console.log("CLEAN DUMMY TEST DATA");
     Monographs.query('delete from monograph.monographs where id >= 0;');
     done();
   });

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
       position: 1,
       title:"Test monograph",
       theme_id: 1,
       brand_id:2,
       num:1
     };
     request.post(service).send(monograph2save)
     .expect(210)
     .end(function(err, resp){
       expect(err).to.not.exist;
       var body = resp.body;
       expect(body).to.exist;
       expect(body.position).to.equal(monograph2save.position);
       expect(body.title).to.equal(monograph2save.title);
       expect(body.theme_id).to.equal(monograph2save.theme_id);
       expect(body.brand_id).to.equal(monograph2save.brand_id);
       done();
     });

   });

 });


});
