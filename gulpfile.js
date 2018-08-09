var gulp = require('gulp');

var server = require('gulp-webserver');

var url = require('url');

var path = require('path');

var fs = require('fs');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8068,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                if (pathname === '/api/list') {
                    res.end(JSON.stringify(data))
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(__dirname, 'src', pathname))
                }
            }
        }))
})