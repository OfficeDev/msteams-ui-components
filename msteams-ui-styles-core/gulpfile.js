const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const filter = require('gulp-filter');
const tslint = require('tslint');
const gulpTsLint = require('gulp-tslint');

const src = ['src/**/*.{ts,tsx}'];

gulp.task('default', ['lint'], () => {
  const tsProject = ts.createProject('./tsconfig.json');
  const f = filter(['**', '!**/*.d.ts'], { restore: true });
  gulp.src(src)
    .pipe(tsProject())
    .pipe(f)
    .pipe(babel())
    .pipe(f.restore)
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', () => {
  const program = tslint.Linter.createProgram('./tsconfig.json');
  return gulp.src(src)
    .pipe(gulpTsLint({ program }))
    .pipe(gulpTsLint.report());
});


gulp.task('watch', ['default'], () => {
  gulp.watch(src, ['default']);
});
