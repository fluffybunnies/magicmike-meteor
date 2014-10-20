magicmike-meteor
================

Meteor doesn't support npm directly. Instead add
```
meteor add meteorhacks:npm
```

Then place your npm modules in a new packages.json file (note the "s").

In place of
```
var myModule = require('my-module')
```
use
```
var myModule = Meteor.require('my-module');
```