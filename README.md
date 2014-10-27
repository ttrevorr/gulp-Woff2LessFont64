# gulp-cssfont64 [![Build Status](https://travis-ci.org/247even/gulp-cssfont64.png?branch=master)](https://travis-ci.org/247even/gulp-cssfont64) [![NPM version](https://badge.fury.io/js/gulp-cssfont64.png)](http://badge.fury.io/js/gulp-cssfont64) [![GitHub version](https://badge.fury.io/gh/247even%2Fgulp-cssfont64.png)](http://badge.fury.io/gh/247even%2Fgulp-cssfont64)

Take a Woff font file and base 64 encode it into a less(css) file.

## Example


#### gulpfile.js

```js
var gulp = require('gulp');
var woff2less = require('gulp-Woff2LessFont64');

gulp.task('default', function () {
	gulp.src('fonts/*.woff')
		.pipe(woff2less())
		.pipe(gulp.dest('path'));
});
```

#### content of "fonts"-folder:

```html
	Basestrap-Font.woff
```

#### output: path/Basestrap-Font.less

```html
	@font-face {font-family: Basestrap-Font; src: url(data:application/x-font-ttf;base64,AABdboAvwAOAAFzugAvAA4AAXS6AJ8ADgABdLoAvwAOAAF0ugAPAA4AAXW6AC8ADgABdboALwAQAAFzugBfABAAAXO6AP8AEAABc7oAzwAQAAF0ugA/ABIAAXO6AA8AEgABc7oAsAASAAFzugB/ABIAAXO6AA8AEgABdLoAXwASAAF0ugB/ABIAAXW6AN8AEgABdLoAbwASAAF1ugAvABIAAXW6AD8AEgABdboA7wASAAF0ugCfABIAAXS6AB8AEgABdLoA7wASAAFzugAPABQAAXO6AB8AFAABc7oALwAUAAFzugA/ABQAAXO6AF8AFAABc7oAbwAUAAFzugB/ABQAAXO6AK8AFAABc7oAjwAUAAF0ugCvABQAAXS6AL8AFAABdLoAzwAUAAF0ugAvABQAAXW6AD8AFAABdQAA);}
```


### License

MIT © ttrevorr
