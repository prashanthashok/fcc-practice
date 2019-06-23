var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = (key, value) => {
      var hashedKey = hash(key);
      if(!this.lookup(key)){
          this.collection[hashedKey] = value;
      }
  }

  this.lookup = (key) => {
      var hashedKey = hash(key);
      return this.collection.hasOwnProperty(hashedKey) ? this.collection[hashedKey] : undefined;   
  }

  this.remove = (key) => {
      var hashedKey = hash(key);
       if (this.collection.hasOwnProperty(hashKey)) {
      delete this.collection[hashKey];
  }}

    
  // change code above this line
};