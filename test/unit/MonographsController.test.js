require("sails-test-helper");

describe("Monograph Controller Test", function(){

 describe("GET Monographs list", function(){
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
     Monographs.query("delete from monograph_test.monographs where id>=0;");
     done();
   });

   var service = "/monographs";
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
     .expect(201)
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

 describe('PUT Update',function(){
   before(function(done){
     var data ={
       id:99999,
       position: 1,
       title:"ToUpdate",
       theme_id: 1,
       brand_id:2,
       num:1
     };
     Monographs.create(data,function(err,result){
      if(err) return done(err);
      done();
     });
   });

   after(function(done){
     Monographs.destroy({id:99999}).exec(function(err,monograph){
       if(err) return done(err);
       done();
     });
   });

   it("Cant update monograph by bad request", function(done){
     request.put('/monograph/id').send({position:33})
     .expect(400)
     .end(function(err, resp){
       expect(err).to.not.exist;
       expect(resp.text).to.equals("Bad request, send monograph id ");
       done();
     });
   });

   it("Update monograph successful",function(done){
     var data2Update = {position:2,theme_id:2,num:666};
     request.put('/monograph/99999').send(data2Update)
     .expect(201)
     .end(function(err, resp){
       expect(err).to.not.exist;
       var updated = resp.body[0];
       expect(updated.position).to.equal(data2Update.position);
       expect(updated.theme_id).to.equal(data2Update.theme_id);
       expect(updated.num).to.equal(data2Update.num);
       done();
     });
   });

   it("Try 2 update a monograph that doesnt exist",function(done){
     var data2Update = {position:2,theme_id:2,num:666};
     request.put('/monograph/2').send(data2Update)
     .expect(400)
     .end(function(err, resp){
       var error = resp.error;
       expect(error.text).to.equal('"Cannot update register, does not exist"');
       done();
     });
   });

 });


});
