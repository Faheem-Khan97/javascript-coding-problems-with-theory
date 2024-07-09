const inputObject = {
  a: {
    b: {
      c: "Hello",
    },
    d: [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
      {
        x: 5,
        y: 6,
        z: [
          {
            f: "z",
            g: "y",
          },
        ],
      },
    ],
  },
  e: 5,
  f: 8,
  arr: [4, 5, 6],
};

const mapKeys = {
  arr: "nums",
  "a.b.c": "greet",
  "a.d.x": "x-coor",
  "a.d.y": "y-coor",
  e: "expenditure",
  "a.d": "corrdinates",
  f: "just",
  "a.d.z": "faheem",
  "a.d.z.f": "fff",
  "a.d.z.g": "yyy",
};

function transform(input, parentKey = "", res = {}) {
  Object.keys(input).forEach((key) => {
    const value = input[key];
    if (value && Array.isArray(value)) {
      const pkey = parentKey == "" ? parentKey + key : parentKey + "." + key;
      value.forEach((element, index) => {
        const result = transform(value[index], pkey, {});
        console.log({ result });
        res[mapKeys[pkey]] = [...(res[mapKeys[pkey]] || []), result];
      });
      /* const result = transform(value, pkey, {}) 
    	      console.log({result}) */
    } else if (value && typeof value == "object") {
      /* console.log({value})
    	      console.log({parentKey}) */
      transform(
        value,
        parentKey == "" ? parentKey + key : parentKey + "." + key,
        res
      );
    } else {
      /* console.log("inside else", parentKey, key, value) */
      if (parentKey == "") {
        res[mapKeys[parentKey + key]] = value;
      } else {
        res[mapKeys[parentKey + "." + key]] = value;
      }
    }
  });
  return res;
}

console.log(transform(inputObject, ""));
