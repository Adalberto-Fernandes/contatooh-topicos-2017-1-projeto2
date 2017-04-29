var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      nome: {
         type: String,
         //maxlength: 100,
         required: true
      },
      email: {
         type: String,
         required: true,
         index: {
            unique: true
         }
      }
   });

   return mongoose.model('Contato', schema);

};