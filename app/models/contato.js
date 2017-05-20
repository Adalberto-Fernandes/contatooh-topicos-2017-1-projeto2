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
      },
      emergencia: {
         type: mongoose.Schema.ObjectId,
         ref: 'Contato'
      }
   });

   return mongoose.model('Contato', schema);

};