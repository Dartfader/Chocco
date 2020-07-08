const {src, dest, task, series, watch,parallel}= require('gulp');
const rm = require( 'gulp-rm' ); // clear directories and files
const sass = require('gulp-sass'); //sass compiler
const concat = require('gulp-concat'); //join files
const browserSync = require('browser-sync').create(); //create local and external server
const reload = browserSync.reload; //auto-reload server after changes
const sassGlob= require('gulp-sass-glob'); //
const autoprefixer = require('gulp-autoprefixer'); //add prefixes to styles
// const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');//grouping all css media queries
const cleanCSS = require('gulp-clean-css');//minimize css code and clean
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');//Minimize of js code
const svgo=require('gulp-svgo');
const svgSprite=require('gulp-svg-sprite');
const {SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS} = require('./gulp.config');
sass.compiler = require('node-sass');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;
const imagemin = require('gulp-imagemin');// minimize images
const ghPages = require('gh-pages');//add deploy on gh-page (npx gulp deploy)
const path = require('path');

task( 'clean', ()=> {
    console.log(env);
    return src( `${DIST_PATH}/**/*`, { read: false })
        .pipe(rm())
});

task('copy:html', () => {
    return src(`${SRC_PATH}/*.html`)
        .pipe(dest(DIST_PATH))
        .pipe(reload({stream:true}));
    });

task('copy:video', () => {
    return src('./src/video.mp4')
        .pipe(dest(DIST_PATH))
        .pipe(reload({stream:true}));
});

// const fonts = [
//     './src/fonts/**/*.woff',
//     // './src/fonts/**/*.woff2'
// ]
// task('copy:fonts', () => {
//     return src(fonts).pipe(dest('./dist/fonts'))
// })

task('styles', () => {
    return src([...STYLE_LIBS,'src/styles/main.scss'])
        .pipe(gulpif(env==='dev', sourcemaps.init()))
        .pipe(concat('main.min.scss'))
        .pipe(sassGlob())//автоподключение стилей
        .pipe(sass().on('error', sass.logError))
        // .pipe(px2rem())
        .pipe(gulpif(env==='prod', autoprefixer({
            cascade: false
        })))
        .pipe(gulpif(env==='prod', gcmq()))
        .pipe(gulpif(env==='prod', cleanCSS()))
        .pipe(gulpif(env==='dev', sourcemaps.write()))
        .pipe(dest(DIST_PATH))
        .pipe(reload({stream:true}));
});
  const libs = [
     "node_modules/jquery/dist/jquery.js",
     'src/scripts/*.js'
  ];

task('scripts', ()=> {
    return src('src/scripts/*.js')
        //.pipe(sourcemaps.init())
        //.pipe(concat('main.min.js'))
       // .pipe(babel({
       //  presets: ['@babel/env']
       //      })
       //  )
        //.pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(dest(`${DIST_PATH}/scripts`))
        .pipe(reload({stream:true}));
});

task ('img', () => {
    return src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'))
});

 task('icons', () =>{
     return src('src/img/icons/*.svg')
         .pipe(
             svgo({
             plugins: [
                 {removeAttrs: { attrs:'(fill|stroke|style|width|height|data.*)' }}
             ]})
         )
         .pipe(svgSprite(
             {
                 mode: {
                     symbol: {
                         sprite: '../sprite.svg'
                     }
                 }
             }
         ))
                 .pipe(dest(`${DIST_PATH}/img/icons/sprite/`));
 });

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open:false //настройки API Browser Sync
    });
});

task('watch', () => {
    watch('./src/styles/**/*.scss', series('styles'));
    watch('./src/*.html', series('copy:html'));
     watch('./src/scripts/*.js', series('scripts'));
     watch('./src/img/icons/*.svg', series('icons'));
    watch('./src/img/**/*', series('img'));
});

function deploy(cb) {
    ghPages.publish(path.join(process.cwd(), './dist'), cb);
}
exports.deploy = deploy;

task('default',
    series('clean',
        parallel('copy:html', 'styles','img', 'icons','scripts','copy:video'),
        parallel('watch', 'server')
    )
);
task('build',
    series(
        'clean',
        parallel('copy:html','styles','img', 'icons','copy:video'),
        parallel('watch', 'server','scripts')
    )
);