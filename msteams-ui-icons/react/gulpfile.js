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
  return del(['lib']);
});

gulp.task('watch', gulp.series('default'), () => {
  return gulp.watch(src, ['default']);
});

function createBuildTask(crashOnError) {
  const tsProject = ts.createProject('./tsconfig.json');
  const f = filter(['**', '!**/*.d.ts'], { restore: true });
  return gulp.src(src)
    .pipe(tsProject())
    .once('error', function () {
      if (crashOnError) {
        this.once('finish', () => process.exit(1));
      }
    })
    .pipe(f)
    .pipe(babel())
    .pipe(f.restore)
    .pipe(gulp.dest('lib'));
}
