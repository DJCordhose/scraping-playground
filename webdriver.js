var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'phantomjs'
    },
    // host: 'localhost',
    // port: 8080
};

console.log('Start');

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(title => console.log('Title was: ' + title))
    .end()
    .catch(e => {
        console.log(e);
    });