/*
Write a function that takes an oject and a path (in string format) as parameters
and returns the value from that object pointed by the path. Look at the example.

ex- 1
    object = {
        name: "Faheem",
        address: {
            "city": "Patna",
            "state": "Bihar"
        },
        age : 24
    }

    path = "address.city"
    output = "Patna"

    path = "address.pin"
    output = undefined;

    path = "address"
    output = {
            "city": "Patna",
            "state": "Bihar"
        }
*/

// Interviewer had given me a more nested object
const obj = {
  name: "Faheem",
  address: {
    city: "Patna",
    state: "Bihar",
  },
  age: 24,
};

function getValue(obj, path) {
  let result = obj;
  const properties = path.split(".");
  for (let prop of properties) {
    if (result[prop]) {
      result = result[prop];
    } else {
      console.log("else");
      result = undefined;
      break;
    }
  }
  return result;
}

console.log(getValue(obj, "address.city"));
console.log(getValue(obj, "address.pin"));
console.log(getValue(obj, "address"));
