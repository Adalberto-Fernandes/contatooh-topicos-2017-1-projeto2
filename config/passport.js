var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

   var Usuario = mongoose.model('Usuario');

   passport.use(new GitHubStrategy({
      clientID: '36398af2fdb600870e0e',
      clientSecret: '86f021600cad2f781c82bef2ea3a4707046707de',
      callbackURL: 'http://localhost:3000/auth/github/callback'
   }, function(accessToken, refreshToken, profile, done) {

      Usuario.findOrCreate(
         {login: profile.username},
         {nome: profile.username},
         function(erro, usuario) {
            if(erro) {
               console.log(erro);
               return done(erro); // Prossegue COM ERRO
            }
            return done(null, usuario); // Prossegue SEM ERRO
         }
      );

   }));

   passport.serializeUser(function(usuario, done) {
      done(null, usuario._id);
   });

   passport.deserializeUser(function(id, done) {
      Usuario.findById(id).exec().then(
         function(usuario) {
            done(null, usuario);
         }
      );
   });

};