var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MyPlugIn', 'coolMethod', [arg0]);
};

module.exports.add = function (arg0, success, error) {
  exec(success, error, 'MyPlugIn', 'add', [arg0]);
}
