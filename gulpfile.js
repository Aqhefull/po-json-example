const { src, dest } = require("gulp");
const pojson = require("gulp-po-json");
const prettier = require("gulp-prettier");

function poWork() {
  return src('locales/*.po')
        .pipe(pojson())
        .pipe(prettier({ singleQuote: true }))
        .pipe(dest("./dist"));
}

exports.default = poWork;