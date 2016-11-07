# ng-annotate-cleaner



webpack plugin for remove `ng-annotate`'d "ngInject" from build files of https://github.com/olov/ng-annotate

**Usage**

`npm i ng-annotate-cleaner --save-dev`

**import to webpack config**

- es5

```
var NgAnnotateCleaner = require('ng-annotate-cleaner');
```

- es6

```
import NgAnnotateCleaner from 'ng-annotate-cleaner';
```

**add to plugins section**

```
... 
config.plugins = [
    new NgAnnotateCleaner()
]
```

issues https://github.com/djleonskennedy/ng-annotate-cleaner/issues

License

MIT, see [LICENSE](https://github.com/djleonskennedy/ng-annotate-cleaner/blob/master/LICENSE.md) file.