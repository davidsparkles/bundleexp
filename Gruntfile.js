module.exports = function(grunt) {
  grunt.initConfig({
    bundle: {
      app: {
        src: 'index.js',
	dest: 'bundle.js'
      }
    },
    watch: {
      options: {
        spawn: false
      },
      app: {
        files: '<%= bundle.app.required %>',
        tasks: ['bundle:app']
      }
    }
  })
  
  grunt.loadNpmTasks('grunt-bundle')
  grunt.registerTask('default', ['bundle'])
}
