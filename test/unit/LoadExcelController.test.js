require('sails-test-helper');

describe("Load Excel Controller Test", function(){

  describe("POST load excel", function(){

    it.skip('Return 400 without excel path', function(done){
      request.post('/load')
       .expect(400)
       .end(function(err,resp){
         expect(err).to.not.exist;
         done();
       });
    });

  });

});
