const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const filter = require('gulp-filter');

gulp.task('default', () => {
  const tsProject = ts.createProject('tsconfig.json');
  const f = filter(['**', '!**/*.d.ts'], { restore: true });
  gulp.src('src/**/*.{ts,tsx}')
    .pipe(tsProject())
    .pipe(f)
    .pipe(babel())
    .pipe(f.restore)
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', ['default'], () => {
  gulp.watch('src/**/*.{ts,tsx}', ['default']);
});
