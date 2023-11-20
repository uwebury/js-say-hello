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

//alternative solution 1:
//function sayHello(name, time) {
//	if (!name) {
//		name = "Unknown";
//        // SUPER important: no return here!
//        // because the code continues below, since we haven't logged anything yet
//	}
//	if (time > 12) {
//		console.log("Good afternoon", name);
//		return;
//	}
//	console.log("Good morning", name);
//}

//alternative solution 2:
// with default parameters
//function sayHello(name = 'Unknown', time) {
//	if (time > 12) {
//		console.log("Good afternoon", name);
//		return;
//	}
//	console.log("Good morning", name);
//}

// test cases
sayHello();
sayHello("Jane");
sayHello("Jane", 14);
