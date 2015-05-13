/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {primaryKey: true,autoIncrement: true,type: 'integer'},
    position:{type:'integer',required:true},
    num:{type:'integer', default:0},
    title:{type:'string',required:true},

    theme_id:{
      model:'themes',
      required:true
    },
    brand_id:{
      model:'brands'
    }

  }

};
