const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const filter = require('gulp-filter');
const del = require('del');

const src = ['src/**/*.{ts,tsx}'];

gulp.task('default', () => {
  return createBuildTask();
});

gulp.task('clean', () => {
  del(['lib']);
});

gulp.task('watch', ['default'], () => {
  gulp.watch(src, ['default']);
});

function createBuildTask(crashOnError) {
  const tsProject = ts.createProject('./tsconfig.json');
  const f = filter(['**', '!**/*.d.ts'], { restore: true });
  return gulp.src(src)
    .pipe(tsProject())
    .pipe(f)
    .pipe(babel())
    .pipe(f.restore)
    .pipe(gulp.dest('lib'));
}
