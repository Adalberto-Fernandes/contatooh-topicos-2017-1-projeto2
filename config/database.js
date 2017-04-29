var mongoose = require('mongoose');

module.exports = function(uri) {
   mongoose.connect(uri);

   mongoose.connection.on('connected', function() {
      console.log('Mongoose! Conectado a ' + uri);
   });

   mongoose.connection.on('disconnected', function() {
      console.log('Mongoose! Desconectado de ' + uri);
   });

   mongoose.connection.on('error', function(erro) {
      console.log('Mongoose! Erro na conexão: ' + erro);
   });

   process.on('SIGINT', function() {
      mongoose.connection.close(function() {
         console.log('Mongoose! Desconectado pelo término da aplicação');
         // 0 = saída sem erros
         process.exit(0);
      });
   });

}