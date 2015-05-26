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

 //todo Get out to stub or spy, just test with local data and number xlxs fields
 it.skip("Read file",function(done){
   var file = "/Users/emmanuelmaldonado/Documents/monografias_test.xlsx";
   LoadExcelService.readExcel(file, function(err, data){
     expect(err).to.not.exist;
     expect(data.loadTotal).to.equal(90);
     done();
   });
 });


});
