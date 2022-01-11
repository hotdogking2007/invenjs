const fs = require('fs');
// fs.readFile('test.json', 'utf-8', (err, data) => {
//     console.log(JSON.parse(data));
// })

class inven{
    data;
    filename;
    stack;
    constructor(_filename){
        this.filename = _filename;
        this.stack = 0;
        this.data = {stack: this.stack};
        var _file;
        fs.readFile("tet.json", 'utf8',(err, data)=>{
            _file = data;
        })
        if(_file == undefined){
            fs.open(_filename,"w",(err,fd)=>{
                console.log("asdf");
            })
        }
    };
    push(_itemname, _typecode, _durability, _count){
        var _stack = this.stack;
        var _break = false;
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)]["typecode"] == _typecode){
                if(this.data[String(i)]["addtion"]["content_or_not"] == false){
                    this.data[String(i)]["count"] += _count;
                    _break = true;
                    break;
                }
            }
        }
        if(_break != true){
        this.data[String(_stack)] = {};
        this.data[String(_stack)]["name"] = _itemname;
        this.data[String(_stack)]["typecode"] = _typecode
        this.data[String(_stack)]["durability"] = _durability;
        this.data[String(_stack)]["count"] = _count
        this.data[String(_stack)]["addtion"] = {"content_or_not":false};
        this.data[String(_stack)]["addtion"]["content"] = {};
        // if(_addtion != null){
        //     this.data[String(_stack)]["addtion"] = {};
        //     this.data[String(_stack)]["addtion"]["content"] = {};
        //     this.data[String(_stack)]["addtion"]["content_or_not"] = true;
        //     var _content = _addtion["c"];
        //     this.data[String(_stack)]["addtion"]["content"] += _content["c"];
        //     console.log(this.data[String(_stack)]["addtion"]["content"]);
        // }
        this.stack += 1;
        this.data.stack = this.stack;
        }
    };
    add_ability(_itemname,_k,_v){
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)]["name"] == _itemname){
                this.data[String(i)]["addtion"]["content"][String(_k)] = _v;
                this.data[String(i)]["addtion"]["content_or_not"] = true;
                break;
            }
        }
    };
    set_count(_mode, _typecode, _count){
        switch(_mode){
            case 'add': {
                for(var i=0;i<this.stack;i++){
                    if(this.data[String(i)]["typecode"] == _typecode){
                        if(this.data[String(i)]["addtion"]["content_or_not"] == false){
                            this.data[String(i)]["count"] += _count;
                            break;
                        }
                    }
                }
            };
            case 'reset': {
                for(var i=0;i<this.stack;i++){
                    if(this.data[String(i)]["typecode"] == _typecode){
                        if(this.data[String(i)]["addtion"]["content_or_not"] == false){
                            this.data[String(i)]["count"] = _count;
                            break;
                        }
                    }
                }
            };
            case 'minus': {
                for(var i=0;i<this.stack;i++){
                    if(this.data[String(i)]["typecode"] == _typecode){
                        if(this.data[String(i)]["addtion"]["content_or_not"] == false){
                            this.data[String(i)]["count"] -= _count;
                            break;
                        }
                    }
                }
            };
            default: {
                console.error(new Error(`${_mode} is not found mode and The mod is only add minus reset`));
            }
            
        }
    };
    get_data_json(){
        return this.data;
    };
    get_data_string(){
        return JSON.stringify(this.data);
    }
    get_stack_count(_stack){
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)] == _stack){
                return this.data[String(i)]["count"];
            }
        }
        console.error(new Error("stack is not found"));
    };
    get_stack_rename(_stack, _rename){
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)]["name"] == _name){
                this.data[String(i)]["name"] = String(_rename);
            }
        }
        console.error(new Error("stack is not found"))
    };
    set_stack_rename(_stack){
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)]["name"] == _name){
                return this.data[String(i)]["name"];
            }
        }
    };

    get_name_count(_name){
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)]["name"] == _name){
                return this.data[String(i)]["count"];
            }
        }
        console.error(new Error("name is not found"));
    };
    set_name_rename(_name, _rename){
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)]["name"] == _name){
                this.data[String(i)]["name"] = String(_rename);
                break;
            }
        }
    };
    get_name_rename(_stack){
        for(var i=0;i<this.stack;i++){
            if(this.data[String(i)]["name"] == _name){
                return this.data[String(_stack)]["name"];
            }
        }
    };
    write(){
        fs.writeFile(this.filename, JSON.stringify(this.data), "utf8", (error) => {
            console.log("write succed");
        })
    };
    print(){
        console.log(JSON.stringify(this.data));
    };
}
module.exports = {inven}