const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = tell(question);
promise.then((fortune) => {
  console.log(question);
  console.log(fortune);
}).catch(console.log);


console.log(promise);

