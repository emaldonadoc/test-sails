require('sails-test-helper');

describe("Load Excel Service Test", function(){

  it("No valid path",function(done){
    LoadExcelService.readExcel("/excel/data", function(err,data){
      expect(data).to.not.exist;
      expect(err).to.exist;
      expect(err.message).to.equal("No valid file");
      done();
    });
  });



});
