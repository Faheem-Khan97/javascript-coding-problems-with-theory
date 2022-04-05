// Problem - 1
// Deep flatten a nested object

function deepFlatten(obj) {
    const res = {};
    function flat(ob, parent = ""){
        for(let key in ob){
          if(typeof ob[key] == 'object'){
              flat(ob[key], parent + key + ".")
          }
        else{
            res[parent + key] = ob[key]
        }
        
      }
    }
    flat(obj, "");
    return res;
};

const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };

const result = deepFlatten(obj);
console.log(result); // { A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }