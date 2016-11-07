"use strict";

const
  path = require('path'),
  fs = require('fs');

class NgAnnotateCleaner {

  constructor() {
    this.assests = null;
  }

  apply(compiler) {

    compiler.plugin('emit', (compilation, callback) => {
      this.assests = compilation.assets;
      callback();
    });

    compiler.plugin('done', stats => {

      const
        js = Object.keys(this.assests)
          .filter(item => /\.js$/i.test(item));

      js.forEach(jsFile => {
        const
          filePath = compiler.options.output.path + "/" + jsFile;

        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) console.log(err);

          const
            result = data.replace(/["']ngInject["'];*/g, "");

          fs.writeFile(filePath, result, 'utf8', err => {
            if (err) console.log(err);
          });
        });
      });
    });
  }
}

module.exports = NgAnnotateCleaner;



