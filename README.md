magicmike-meteor
================

### Install
```
$ meteor
```
Visit http://localhost:3000 in your browser


### NPM Support

Meteor doesn't support npm directly. Instead...
```
$ meteor add meteorhacks:npm
```

Then place your npm modules in a new packages.json file (note the "s").

In your application, change...
```javascript
var myModule = require('my-module')
```
use
```javascript
var myModule = Meteor.require('my-module');
```