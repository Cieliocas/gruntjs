module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/styles.css': 'src/styles/styles.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/styles.min.css': 'src/styles/styles.less'
                }
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);
}