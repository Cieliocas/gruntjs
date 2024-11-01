module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "styles.css": "styles.less"
                },
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "styles.min.css": "styles.less"
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "styles2.css": "styles.scss"
                }
            }
        },
        concurrent: {
            target: ['olaGrunt', 'less', 'sass', 'tarefaDemorada']
        }
    });

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log("Hello, Grunt!");
            done();
        }, 3000);
    });

    grunt.registerTask('tarefaDemorada', function() {
        const done = this.async();
        setTimeout(function() {
            console.log("Hello, Grunt!");
            done();
        }, 3000);
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask('default', ['concurrent']);
}