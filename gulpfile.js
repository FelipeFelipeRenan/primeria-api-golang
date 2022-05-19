var gulp = require("gulp")
var shell = require("gulp-shell")

// compilar novo binario com mudanças

gulp.task("install-binary", shell.task([
    'go build ./src/github.com/FelipeFelipeRenan/romanserver/main.go'
    ]))



// mover para a pasta bin

gulp.task("Moving to bin directory", shell.task([
    "mv main.go /home/feliperenan/Trabalhos/Langs/GO/estudos-web/testeroman/bin"
]))

// iniciar o supervisor com o install-binary como argumento
gulp.task("restart-supervisor", gulp.series("install-binary"), shell.task([
    'supervisorctl restart myserver'
]))

gulp.task("watch", function(){
    gulp.watch("*", gulp.series('install-binary', 'restart-supervisor'))
})


gulp.task('default', gulp.series('watch'))