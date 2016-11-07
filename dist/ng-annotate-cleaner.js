"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var path = require('path'),
    fs = require('fs');

var NgAnnotateCleaner = function () {
  function NgAnnotateCleaner() {
    _classCallCheck(this, NgAnnotateCleaner);

    this.assests = null;
  }

  _createClass(NgAnnotateCleaner, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      compiler.plugin('emit', function (compilation, callback) {
        _this.assests = compilation.assets;
        callback();
      });

      compiler.plugin('done', function (stats) {

        var js = Object.keys(_this.assests).filter(function (item) {
          return (/\.js$/i.test(item)
          );
        });

        js.forEach(function (jsFile) {
          var filePath = compiler.options.output.path + "/" + jsFile;

          fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) console.log(err);

            var result = data.replace(/["']ngInject["'];*/g, "");

            fs.writeFile(filePath, result, 'utf8', function (err) {
              if (err) console.log(err);
            });
          });
        });
      });
    }
  }]);

  return NgAnnotateCleaner;
}();

module.exports = NgAnnotateCleaner;