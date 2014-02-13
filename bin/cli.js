#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var qn = require('qn');
var mime = require('mime');
var cliparoo = require('cliparoo');

// check config

if (!process.argv[2]) {
    console.log('Usage: up7niu file');
    process.exit(1);
}
var file = process.argv[2];

var home = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
var configFile = path.join(home , '/.up7niu.json');

if (fs.existsSync(configFile)) {
    var config = require(configFile);
    if (!config.accessKey || !config.secretKey || !config.bucket || !config.domain) {
        console.log('ERROR: config file error, please update config file follow the readme..');
        process.exit(1);
    }

    var client = qn.create(config);
    client.upload(fs.createReadStream(file), {contentType: mime.lookup(file)}, function(err, result) {
        if (err) {
            throw err;
        }
        var url = result.url;
        cliparoo(url, function(err) {
            if (err) {
                throw err;
            }
            console.log(file + ' ' + url + ' √');
        });
    });
} else {
    console.log('ERROR: config file not found, please create config file follow the readme..');
    process.exit(2);
}


