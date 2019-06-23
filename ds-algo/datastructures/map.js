var Map = function() {
  this.collection = {};
  // change code below this line

  // this will add to the map
  this.add = (key, value) => {
      if(!this.has(key)) this.collection[key] = value;
  };

  

  // this will remove the key from the map
  this.remove = (key) => {
    if(this.has(key)) delete this.collection.key;
  };

  // this will get the value for a given key
  this.get = (key) => {
      return this.has(key) ? this.collection[key] : undefined;
  };

  // this will return true if the key exists
  this.has = (key) => {
      return this.collection.hasOwnProperty(key);
  };

  // this will return the all the values as an array
    this.values = () => {
      return Object.values(this.collection);
  };
        
  // this will return the number of items in the map
  this.size = () => {
      return Object.values(this.collection).length;
  };
    
  // this will clear the map
  this.clear = () => {
      this.collection = {};
  }
  // change code above this line
};

module.exports = { Map };