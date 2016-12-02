var configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' +
    configValues.pwd + '@ds119578.mlab.com:19578/weathercam';
  }
  
}
