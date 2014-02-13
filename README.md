# up7niu [![Build Status](https://secure.travis-ci.org/lyuehh/up7niu.png?branch=master)](http://travis-ci.org/lyuehh/up7niu)

Upload file to qiniu in command line

## Getting Started
Install with: `npm install -g up7niu`

Then create config file: `cd ~; touch .up7niu.json`, the content like this:

```
{
    "accessKey": "your access key",
    "secretKey": "your secret key",
    "bucket": "your bucket name",
    "domain": "your domain"
}

```

## Examples

```
~ ^_^ up7 42.jpg
42.jpg http://lyuehh-img.qiniudn.com/Fpm6sL0RXMsCsqsUUzCmMZpHTPbp √
```

or:

```
~ ^_^ ls -1 | head | xargs -I {} up7 {}
01.jpg http://lyuehh-img.qiniudn.com/Fomlaw-kCDMCY2MFFjViHAuoOU4n √
02.jpg http://lyuehh-img.qiniudn.com/FpcHsJURLURDPh1YqtQc_1IPx2T7 √
03.jpg http://lyuehh-img.qiniudn.com/FjpN8cHa_pyS5T34DJ29LviAMmqh √
04.jpg http://lyuehh-img.qiniudn.com/FkFP3JvPLR4n83b8mHNUmEWCygWH √
05.jpg http://lyuehh-img.qiniudn.com/FlZd-rdLsEYQAuaP-Plno1jJTKwk √
06.jpg http://lyuehh-img.qiniudn.com/FjLTUFKIMluPyjyaTrkDdYhaD2Rs √
07.jpg http://lyuehh-img.qiniudn.com/FnV6K-7VY0SFbyLEoTR-SZKQY4Vq √
08.jpg http://lyuehh-img.qiniudn.com/FkDTI-Pidx1TogrxfuWeDGSLNeQZ √
09.jpg http://lyuehh-img.qiniudn.com/FgiKCcjmYp4zL-teZbwU7jNC0lgL √
10.jpg http://lyuehh-img.qiniudn.com/Fuzp7IX-tkTRVRphdl-oZf7W_86X √
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.2 First Release

## License
Copyright (c) 2014 lyuehh. Licensed under the MIT license.
