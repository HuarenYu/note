const mixin = function(obj, mixins) {
    const newObj = obj;
    newObj.prototype = Object.create(obj.prototype);
    for (let prop in mixins) {
      if (mixins.hasOwnProperty(prop)) {
        newObj.prototype[prop] = mixins[prop];
      }
    }
    return newObj;
  }
  const manMixins = {
    speak: function (){
      console.log("I'm "+this.name);
    }
  };
  const Man = function() {
    this.name = 'wang';
  };
  const manCanSpeak = mixin(Man,manMixins);
  const man = new manCanSpeak(); 
  man.speak(); //'I'm wang'