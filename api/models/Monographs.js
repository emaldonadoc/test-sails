/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {primaryKey: true,autoIncrement: true,type: 'integer'},
    position:{type:'string',required:true},
    num:{type:'string', defaultsTo:0},
    title:{type:'string',required:true},

    // Relationship with others tables
    theme_id:{
      model:'themes'
    },
    brand_id:{
      model:'brands'
    }

  }

};
