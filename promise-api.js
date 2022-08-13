// const p = Promise.resolve({id:1})
//   p.then((res)=> console.log(res))

const p = Promise.reject(new Error("Failed to connect..."));
p.catch((err) => console.log(err.message));
