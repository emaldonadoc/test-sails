var excel = require('excel');
var path = require('path');
var excelExtentions = [".xlsx", ".xls"];


var LoadExcelService ={

  readExcel:  function(pathExcel, callback){
    if(!isPathNameValid(path.extname(pathExcel)))
      return callback({message: "No valid file"}, null);


    excel(pathExcel, function(err, data){
      if(err) return callback(err, null);
      Monographs.create(getExcelMonographs(data)).exec(function(err, created){
        if(err) return callback(err,null);
        callback(null,{loadTotal:created.length});
      });
    });

  }

}

function isPathNameValid(extname){
  return excelExtentions.indexOf(extname) > -1
}

function getExcelMonographs(data){
  var addMonographs = [];
  for(var i=0; i < data.length ; i++){
    if(isValidData(data[i])){
      addMonographs.push(
        {
          position:data[i][0],
          title: data[i][1]
        });
    }
  }
  return addMonographs;
}

function isValidData(data){
  return data[0] != '' && data[0].indexOf('Num.')<0 && data[1]!=''
}

module.exports = LoadExcelService;
