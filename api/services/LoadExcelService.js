var excel = require('excel');
var path = require('path');
var excelExtentions = [".xlsx", ".xls"];

var LoadExcelService ={

  readExcel:  function(pathExcel, callback){
    if(!isPathNameValid(path.extname(pathExcel)))
      return callback({message: "No valid file"}, null);

    excel(pathExcel, function(err, data){
      if(err) return callback(err, null);
      console.log("DATA READED", data);

    });
  }

}


module.exports = LoadExcelService;


function isPathNameValid(extname){
  return excelExtentions.indexOf(extname) > -1
}
