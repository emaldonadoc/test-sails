require('sails-test-helper');

describe("Load Excel Controller Test", function(){

  describe("POST load excel", function(){

    var readExcelFunction;

    before(function(done){
      readExcelFunction = sinon.stub(LoadExcelService, 'readExcel',
      function(path,callback){
        callback(null, {message:"Upload monographs success",loadTotal:200});
      })
      done();
    });

    after(function(done) {
      LoadExcelService.readExcel.restore();
      done();
    });

    it('Return 400 without body data', function(done){
      request.post('/load')
       .expect(400)
       .end(function(err,resp){
         expect(err).to.not.exist;
         expect(resp.text).to.equal("Please send a valid excel path");
         done();
       });
    });

    it('Return 400 without excel path', function(done){
      request.post('/load').send({path:""})
       .expect(400)
       .end(function(err,resp){
         expect(err).to.not.exist;
         expect(resp.text).to.equal("Please send a valid excel path");
         done();
       });
    });

    it('Request success read file', function(done){
      request.post('/load').send({path:"/path/archivo.xlsx"})
      .expect(200)
      .end(function(err, resp){
        expect(readExcelFunction).to.be.called;
        expect(resp.body.loadTotal).to.equal(200);
        expect(resp.body.message).to.equal("Upload monographs success");
        done();
      });
    });

  });

});
