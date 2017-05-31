module.exports = function(grunt) {

   grunt.initConfig({

      copy: {
         project: {
            expand: true,  // Desce subdiretórios
            cwd: '.',      // Começa na pasta atual
            src: ['**', '!Gruntfile.js', '!package.json', 
               '!bower.json'],
            dest: 'dist' // O destino é a pasta 'dist'
         }
      },

      clean: {
         dist: {
            src: 'dist'
         }
      }


   });

   grunt.registerTask('default', ['dist']);
   grunt.registerTask('dist', ['clean', 'copy']);
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-clean');

}