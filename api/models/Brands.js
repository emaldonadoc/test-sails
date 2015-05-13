

module.exports = {

  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    name:{
      type:'string',
      enum:['SunRice', 'Raf', 'El Sol'],
      defaultsTo: 'SunRice',
      required:true
    }
  }
};
