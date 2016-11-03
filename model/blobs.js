var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});

blobSchema.methods.findByName = function(callback){
	this.model('Blob').find({name: this.name }, callback);
};

mongoose.model('Blob', blobSchema);