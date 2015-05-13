

module.exports = {

  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    name:{type:'string',required:true},
  }
};
