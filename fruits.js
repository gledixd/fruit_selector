let fruits = {
  molle: "e kuqe",
  banane: "e verdhe",
  mandarin: "portokalli",
};

let keys = Object.keys(fruits);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key, fruits[key]);
}
