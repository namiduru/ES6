// Babel is transpiler for converting code ES6 to ES5

// npm install -g gulp For installing Gulp globally

// npm init for including package.json utility
// npm install for installing files

// npm install --save-dev gulp gulp-babel babel-preset-es2015

//gulpfile.js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es6', () => {
    return gulp.src('src/javascript.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['es6'], () => {   //This will start es6 task et the begining of gulp execiton
    gulp.watch('src/javascript.js', ['es6']);   //And Watching for state changes
});

//javascript.js
let mehmet = 'mehmet';
let giveMeDoubleMehmet = () => {'mehmet' + ' mehmet'};

let summationOfArguments = (...args) => {
    return args.reduce((prev, current) => {
        return prev + current;
    });
};