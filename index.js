// write a function called 'sayHello' that accepts two parameters: name and time.
//
// - if we pass no name, it should log "Good morning, Unknown"
// - if we pass a name, it should log "Good morning, {name}";
// - if time is greater than  12, it should log "Good afternoon, {name}"
//
function sayHello(name, time) {
  if (!name) {
    console.log("Good morning, Unknown");
    return;
  }
  if (time > 12) {
    console.log("Good afternoon, ", name);
    return;
  }
  console.log("Good morning, ", name);
}

// test cases
sayHello();
sayHello("Jane");
sayHello("Jane", 14);
