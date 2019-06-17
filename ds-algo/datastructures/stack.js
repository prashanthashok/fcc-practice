function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    this.push = function(item) {
        collection[collection.length] = item;
    }

    this.pop = function() {
        //return collection.splice(collection.length-1); //not sure why this is not working on FCC, it works on F12 console
        return collection.pop();
    }

    this.peek = function(item){
        return collection[collection.length-1];
    }

    this.isEmpty = function(){
        return collection.length===0 ? true: false;
    }

    this.clear = function() {
        collection = [];
    }

    // Only change code above this line
}

var stackz = new Stack();
stackz.push(1);
stackz.push(2);
stackz.push(3);
stackz.push(4);
stackz.push(5);
stackz.push(6);
console.log(stackz.pop());

stackz.print();