# invenjs
javascript inventory system library
<a href="https://simpleicons.org/"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/></a>

#example

#1.
```js
var inven = require("./invenjs.js")


var test = new inven.inven("asdf"); //your filename
test.push("sword","1","100", 1);
test.add_ability("sword", "damage", 1650)
test.push("grass","2","10", 70);
test.add_ability("grass", "upgrade", 0);
test.push("potion","3","10",5);
test.set_count('add', "potion", 109);
console.log(test.get_data_string());
test.write();
test.print();
